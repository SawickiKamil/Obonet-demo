import * as React from 'react'
import './imageSlider.scss'
import ImgComponent from './imgComponent'
import { ISlideImage } from 'model'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import ArrowButton from '../../baseComponents/buttons/arrowButton'

interface IImageSliderProps {
  images: ISlideImage[]
}

const ImageSlider = ({ images }: IImageSliderProps) => {
  const [translateX, setTranslateX] = React.useState(0)
  const calculateArrayLength = (images.length - 1) * -100
  const constantSize = 100

  const slideLeft = () => {
    translateX === 0 ? setTranslateX(calculateArrayLength) : setTranslateX(translateX + constantSize)
  }

  const slideRight = () => {
    translateX === calculateArrayLength ? setTranslateX(0) : setTranslateX(translateX - constantSize)
  }

  return (
    <div className="slider">
      {images.map(({ image }, index) => (
        <div key={index} className="slider__slide" style={{ transform: `translateX(${translateX}%) ` }}>
          <ImgComponent image={image} />
        </div>
      ))}
      <ArrowButton isLeftIcon={true} handleClick={slideLeft} icon={<BsChevronLeft className="chevron" />} />
      <ArrowButton handleClick={slideRight} icon={<BsChevronRight className="chevron" />} />
    </div>
  )
}

export default ImageSlider
