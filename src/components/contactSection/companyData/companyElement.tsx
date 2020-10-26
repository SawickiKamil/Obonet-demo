import * as React from 'react'
import { IFooter } from 'model'

const CompanyElement = ({ title, items, contact, icons }: IFooter) => {
  return (
    <div className="company-element">
      <h2>{title}</h2>
      {items?.map((item) => (
        <p key={item}>{item}</p>
      ))}
      {contact && (
        <>
          {contact?.map((item) => (
            <a key={item.contact} href={item.href}>
              {item.contact}
            </a>
          ))}
        </>
      )}
      {icons && (
        <>
          {icons?.map(({ url, label, icon, iconDescription }) => (
            <div key={url.concat(label)} className="company-element__icons">
              <p>{iconDescription}</p>
              <a className="link" href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                {icon}
              </a>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default CompanyElement
