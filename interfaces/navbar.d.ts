import { IconType } from 'react-icons/lib'

export interface INavbarItem {
  active: boolean
  id: number
  title: string
  path: string
  icon?: IconType
}