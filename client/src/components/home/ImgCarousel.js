import React from 'react'
import { Carousel } from 'react-bootstrap'

const ImgCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-blosck w-100'
            src='/img/fungus1.jpeg'
            alt='First slide'
          />
          <Carousel.Caption>
            <p className='lead'>Learn about the invisible world around you.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/img/fungus2.jpeg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <p className='lead'>
              Explore the mysteries of the mycology kingdom.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/img/fungus3.jpeg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <p className='lead'>Identify a certain fungus in question.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ImgCarousel
