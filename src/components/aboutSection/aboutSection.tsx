import * as React from 'react'
import { ContentSection } from 'components/baseComponents'
import { title, alt, img2, img1, paragraphs } from './data'
import Seo from 'components/seo'

const AboutSection: React.FC = () => {
  return (
    <>
      <Seo description={paragraphs[0]} />
      <ContentSection
        title={title}
        alt={alt}
        fullSizeImg={img2}
        smallSizeImg={img1}
        paragraphs={paragraphs}
        isReverse={true}
      />
    </>
  )
}

export default AboutSection
