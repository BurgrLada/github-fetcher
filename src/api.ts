import React from 'react'
import axios, { AxiosResponse } from 'axios'
import { User, Repo, Organization, FullUser } from './types'

const baseURL = 'https://api.github.com'

const api = axios.create({
  baseURL: baseURL,
})

const loadUser = async (username: string): Promise<User | null> => {
  const user: AxiosResponse = await api.get(`/users/${username}`)
  if (user) return user.data
  return null
}

const loadRepos = async (username: string): Promise<Repo[] | null> => {
  const res: AxiosResponse = await api.get(`/users/${username}/repos`)
  if (res) {
    return res.data
  }
  return null
}

const loadOrganizations = async (
  username: string
): Promise<Organization[] | null> => {
  const res: AxiosResponse = await api.get(`/users/${username}/orgs`)
  if (res) {
    return res.data
  }
  return null
}

export const loadFullUser = async (
  username: string
): Promise<FullUser | null> => {
  const user = await loadUser(username)
  const repos = await loadRepos(username)
  const organizations = await loadOrganizations(username)
  console.log(user)
  if (user && repos && organizations) {
    const fullUser = { user: user, repos: repos, organizations: organizations }
    return fullUser
  }
  return null
}
