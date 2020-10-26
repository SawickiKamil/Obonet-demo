import * as React from 'react'
import BaseSection from 'components/baseComponents/baseSection'
import './introduction2.scss'
import { title, subtitle } from './data'
import Seo from 'components/seo'

const Introduction: React.FC = () => {
  return (
    <BaseSection className="introduction" fullWidth={true}>
      <Seo title={title} />
      <div className="introduction__wrapper" id="introductionSection" />
      <div className="introduction__text-wrapper">
        <div className="introduction__text-wrapper__title-wrapper">
          <h1 className="introduction__text-wrapper__title-wrapper__text">{title}</h1>
        </div>
        <div className="introduction__text-wrapper__subtitle-wrapper">
          <h2 className="introduction__text-wrapper__subtitle-wrapper__text">{subtitle}</h2>
        </div>
      </div>
    </BaseSection>
  )
}

export default Introduction
