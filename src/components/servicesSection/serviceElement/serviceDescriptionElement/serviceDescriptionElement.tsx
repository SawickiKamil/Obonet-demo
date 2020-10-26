import * as React from 'react'
import './serviceDescriptionElement.scss'
import { IDescription } from 'model'

export const ServiceDescriptionElement = ({ title }: IDescription) => {
  return (
    <div className="description">
      <p className="description__title">{title}</p>
    </div>
  )
}
