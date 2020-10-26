import { ComponentClass } from 'react'

export interface IService {
  iconPath?: string
  title: string
}

export type IDescription = Omit<IService, 'iconPath'>

export type ICircleElement = Pick<IService, 'iconPath'>
