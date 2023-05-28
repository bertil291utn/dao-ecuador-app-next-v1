import { IconType } from 'react-icons/lib'

export interface INavbarItem {
  id: number
  title: string
  path: string
  icon?: IconType
}