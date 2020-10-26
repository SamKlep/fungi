import React from 'react'
import LinksInfo from '../links/LinksInfo'
import LinksPills from '../links/LinksPills'
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
