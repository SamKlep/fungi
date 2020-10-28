import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'

const Content = () => {
  return (
    <div className='text-center container mt-5 mb-3'>
      <Row className='justify-content-md-center pill-links'>
        <Col lg='8'>
          <h1 className='display-4'>What Is a Mushroom?</h1>
          <Image className='mb-3' src='/img/fungus.jpeg' />
          <p>
            A mushroom or toadstool is the fleshy, spore-bearing fruiting body
            of a fungus, typically produced above ground, on soil, or on its
            food source. The standard for the name "mushroom" is the cultivated
            white button mushroom, Agaricus bisporus; hence the word "mushroom"
            is most often applied to those fungi (Basidiomycota, Agaricomycetes)
            that have a stem (stipe), a cap (pileus), and gills (lamellae, sing.
            lamella) on the underside of the cap. "Mushroom" also describes a
            variety of other gilled fungi, with or without stems, therefore the
            term is used to describe the fleshy fruiting bodies of some
            Ascomycota. These gills produce microscopic spores that help the
            fungus spread across the ground or its occupant surface.
          </p>

          <h3>Definition</h3>
          <p>
            According to <a href='www.dictionary.com'>dictionary.com</a> a
            mushroom is defined throughout the ages as:
          </p>
          <br />
        </Col>
      </Row>
    </div>
  )
}

export default Content
