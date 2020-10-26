import * as React from 'react'
import './imgComponent.scss'
import { ISlideImage } from 'model'

const ImgComponent = ({ image }: ISlideImage) => {
  return <img src={image} alt="reaizacja" className="imgComponent" />
}

export default ImgComponent
