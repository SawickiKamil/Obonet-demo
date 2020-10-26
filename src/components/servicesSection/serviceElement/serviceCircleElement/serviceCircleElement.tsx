import * as React from 'react'
import './serviceCircleElement.scss'
import { ICircleElement } from 'model'
import Icon from '@mdi/react'

export const ServiceCircleElement = ({ iconPath }: ICircleElement) => {
  return <div className="circle">{iconPath && <Icon path={iconPath} size={2} color="white" />}</div>
}
