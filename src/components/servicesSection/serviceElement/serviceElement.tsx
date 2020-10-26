import * as React from 'react'
import './serviceElement.scss'
import { ServiceCircleElement } from './serviceCircleElement'
import { ServiceDescriptionElement } from './serviceDescriptionElement'
import { IService } from 'model'

const ServiceElement = ({ iconPath, title }: IService) => {
  return (
    <div className="service-element">
      <ServiceCircleElement iconPath={iconPath} />
      <ServiceDescriptionElement title={title} />
    </div>
  )
}

export default ServiceElement
