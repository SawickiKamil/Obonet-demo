export interface IServiceCard {
  title: string
  content: string
  image: string
}

export type ISingleCard = Omit<IServiceCard, 'content'>

export type IActiveCard = Pick<IServiceCard, 'image'>

export type IContentCard = Pick<IServiceCard, 'content' | 'title'>
