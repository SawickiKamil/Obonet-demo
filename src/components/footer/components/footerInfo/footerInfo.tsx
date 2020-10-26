import * as React from 'react'
import './footerInfo.scss'
import moment from 'moment'

export const FooterInfo: React.FC = () => {
  return (
    <div className="footer-info__social-media">
      <p className="footer-info__social-media__website-rights">
        © Usługi elektryczne - Brzeg i okolice {moment().format('YYYY')}
      </p>
    </div>
  )
}
