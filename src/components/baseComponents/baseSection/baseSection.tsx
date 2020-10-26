import * as React from 'react'
import './baseSection.scss'

interface IBaseSectionProps {
  title?: string
  className?: string
  fullWidth?: boolean
}

const BaseSection: React.FC<IBaseSectionProps> = ({ children, title, fullWidth, className = '' }) => {
  return (
    <section className={['base-section', className].join(' ')}>
      <div className={fullWidth ? 'base-section__container-full-width' : 'base-section__container'}>
        {title && <h1 className="base-section__container__title">{title}</h1>}
        <div className={'base-section__container__content'}>{children}</div>
      </div>
    </section>
  )
}

export default BaseSection
