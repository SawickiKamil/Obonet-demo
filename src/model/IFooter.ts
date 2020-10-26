interface IIconsProps {
  iconDescription: string
  icon: React.ReactElement
  url: string
  label: string
}

interface IContact {
  contact: string
  href: string
}

export interface IFooter {
  title: string
  items?: string[]
  contact?: IContact[]
  icons?: IIconsProps[]
}
