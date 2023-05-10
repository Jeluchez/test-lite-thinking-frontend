import React from 'react'

interface Props {
  title: string
  content: JSX.Element
}
export const Card: React.FC<Props> = ({ title, content }) => {
  return (
    <div className='card'>
      <div className='card__title'>{title}</div>
      <div className='card__content'>{content}</div>
    </div>
  )
}
