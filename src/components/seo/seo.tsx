import * as React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

interface ISeoProps {
  description?: string
  keywords?: string[]
  title?: string
  image?: string
  author?: string
  url?: string
}

const Seo = ({ description, keywords, title, image, author, url }: ISeoProps) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription = description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaUrl = url || data.site.siteMetadata.url
        const metaAuthor = author || data.site.siteMetadata.author
        const metaImage = image || data.site.siteMetadata.image
        const metaKeywords = keywords || [
          'elektryk',
          'Brzeg',
          'opolskie',
          'Oława',
          'dolnośląskie',
          'Wrocław',
          'Opole',
          'elektryk Brzeg',
          'elektryk Opolskie',
          'instalacje elektryczne Brzeg',
          'Obonet',
          'usługi elektryczne',
          'usługi elektryczne Brzeg',
          'Łukasz Obodziński',
        ]
        return (
          <Helmet
            title={title}
            meta={[
              { name: `description`, content: metaDescription },
              { property: `og:title`, content: metaTitle },
              { property: `og:description`, content: metaDescription },
              { property: `og:type`, content: `website` },
              { property: `og:image`, content: metaImage },
              { property: `og:url`, content: metaUrl },
              { property: `og:author`, content: metaAuthor },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          />
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSeoQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`

export default Seo
