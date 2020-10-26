import * as React from 'react'
import { ContentSection } from 'components/baseComponents'
import { title, alt, img2, img1, paragraphs } from './data'
import Seo from 'components/seo'

const InstallationsSection: React.FC = () => {
  return (
    <>
      <Seo image={img1} />
      <ContentSection title={title} alt={alt} fullSizeImg={img2} smallSizeImg={img1} paragraphs={paragraphs} />
    </>
  )
}

export default InstallationsSection
