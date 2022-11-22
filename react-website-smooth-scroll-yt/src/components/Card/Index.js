import React from 'react'
import { CardContainer, CardIcon, CardH2, CardP } from './CardElement'

const Card = ({ img, title, description }) => {
  return (
    <Card>
      <CardIcon src={img}/>
      <CardH2>{title}</CardH2>
      <CardP>{description}</CardP>
    </Card>
  )
}

export default Card
