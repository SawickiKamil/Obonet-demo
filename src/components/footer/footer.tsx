import * as React from 'react'
import './footer.scss'
import { FooterInfo } from './components/footerInfo'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <FooterInfo />
    </footer>
  )
}
