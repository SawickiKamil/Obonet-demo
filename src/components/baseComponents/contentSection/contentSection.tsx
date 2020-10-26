import * as React from 'react'
import BaseSection from 'components/baseComponents/baseSection'
import './contentSection.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface IContentSectionProps {
  title: string
  paragraphs: string[]
  isReverse?: boolean
  fullSizeImg: string
  smallSizeImg: string
  alt: string
}

export const ContentSection = ({
  title,
  paragraphs,
  isReverse,
  fullSizeImg,
  smallSizeImg,
  alt,
}: IContentSectionProps) => {
  React.useEffect(() => {
    const images = document.querySelectorAll('.image')

    images.forEach((images) => {
      gsap.fromTo(
        images,
        { scale: 0.95 },
        {
          scale: 1,
          duration: 1,
          ease: 'easeInOut',
          scrollTrigger: {
            trigger: images as any,
            scrub: 1,
          },
        }
      )
    })
  }, [])

  return (
    <BaseSection className="contentSection">
      <div className={isReverse ? 'about--reverse' : 'about'}>
        <picture className={isReverse ? 'about__left-container--reverse' : 'about__left-container'}>
          <source media="(min-width:1023px)" src={fullSizeImg} />
          <source media="(max-width:1023px)" src={smallSizeImg} />
          <img src={smallSizeImg} alt={alt} className="image" />
        </picture>
        <div className="about__right-container">
          <h1 className="title">{title}</h1>
          {paragraphs.map((item) => (
            <p className="paragraph" key={item}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </BaseSection>
  )
}

{
  /* {matches ? (
            <img className="image" src={smallSizeImg} alt={alt} />
          ) : (
            <img className="image" src={fullSizeImg} alt={alt} />
          )} */
}
