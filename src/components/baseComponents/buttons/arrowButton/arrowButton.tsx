import * as React from 'react'
import './arrowButton.scss'

interface IArrowButtonProps {
  icon: React.ReactElement
  isLeftIcon?: boolean
  handleClick: () => void
}

const ArrowButton = ({ icon, isLeftIcon, handleClick }: IArrowButtonProps) => {
  return (
    <button className={isLeftIcon ? 'left-arrow' : 'right-arrow'} onClick={handleClick}>
      {icon}
    </button>
  )
}

export default ArrowButton
