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
}

export type Organization = {
  login: string
}

export type Repo = {
  name: string
}

export type FullUser = {
  user: User
  repos: Repo[]
  organizations: Organization[]
}

export interface IUserProps {
  setUser: Dispatch<SetStateAction<FullUser | undefined>>
}
