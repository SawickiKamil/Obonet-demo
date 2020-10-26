import * as React from 'react'
import './companyData.scss'
import CompanyElement from './companyElement'
import { address, openHours, contact, socialMedia } from './data'

export const CompanyData: React.FC = () => {
  return (
    <div className="footer-company-data">
      <div className="footer-company-data__container">
        <CompanyElement title="BIURO" items={address} contact={contact} />
        <CompanyElement title="OBONET" icons={socialMedia} />
        <CompanyElement title="GODZINY OTWARCIA" items={openHours} />
      </div>
    </div>
  )
}
