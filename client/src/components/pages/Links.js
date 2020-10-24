import React from 'react'
import LinksInfo from '../LinksInfo'
import LinksPills from '../LinksPills'
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
