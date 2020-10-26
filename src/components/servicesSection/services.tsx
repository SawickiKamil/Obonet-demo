import * as React from 'react'
import './services.scss'
import ServiceElement from './serviceElement'
import BaseSection from 'components/baseComponents/baseSection'
import { ServiceData } from './data'
import ServiceDescription from './serviceDescription'

const Services: React.FC = () => {
  return (
    <BaseSection className="services-section">
      <div className="services">
        <div className="services__description">
          <ServiceDescription />
        </div>
        <div className="services__data">
          {ServiceData.map((item, index) => (
            <ServiceElement key={index} {...item} />
          ))}
        </div>
      </div>
    </BaseSection>
  )
}

export default Services
