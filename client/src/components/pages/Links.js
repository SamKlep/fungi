import React from 'react'
import LinksInfo from '../learn/LinksInfo'
import LinksPills from '../learn/LinksPills'
import { Container } from 'react-bootstrap'

const Links = () => {
  return (
    <Container>
      <LinksPills />
      <LinksInfo />
    </Container>
  )
}

export default Links
