import { Dispatch, SetStateAction } from 'react'

export type EventChange = {
  target: {
    value: string
  }
}

export type EventKey = {
  key: string
}

export type User = {
  login: string
  id: number
  avatar_url: string
  link: string
  html_url: string
}

export type Organization = {
  login: string
  url: string
  description: string
  avatar_url: string
}

export type Repo = {
  name: string
  html_url: string
  description: string
  forks_count: number
  watchers_count: number
}

export type FullUser = {
  user: User
  repos: Repo[]
  organizations: Organization[]
}

export type Status = {
  loading: boolean
  error: string
}

export interface ISearchProps {
  setUser: Dispatch<SetStateAction<FullUser | null>>
  setStatus: Dispatch<SetStateAction<Status>>
  status: Status
}
