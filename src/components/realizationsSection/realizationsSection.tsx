import * as React from 'react'
import './realizations.scss'
import BaseSection from 'components/baseComponents/baseSection'
import ImageSlider from './imageSlider'
import { SlideImages } from './data'

const RealizationsSection: React.FC = () => {
  return (
    <BaseSection title="Nasze Realizacje" className="realizations" fullWidth={true}>
      <ImageSlider images={SlideImages} />
    </BaseSection>
  )
}

export default RealizationsSection
