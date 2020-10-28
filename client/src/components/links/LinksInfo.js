import React from 'react'
import './links.css'
import { Image, Row, Col } from 'react-bootstrap'

const LinksInfo = () => {
  return (
    <div className='text-center container mt-5 mb-3'>
      <Row className='justify-content-md-center pill-links'>
        <Col lg='8'>
          <h1 className='display-4'>Great Mushroom Links</h1>
          <Image
            className='mb-5'
            width={300}
            height={200}
            alt='171x180'
            src='img/main_fungi1.jpeg'
          />
          <p>
            Here you'll find some great mushroom links and free information.
            Discover mushroom websites, articles, and other free resources along
            with recommendations for quality products. Check it out!
          </p>
          <br />
          <hr />
          <br />
          <ul className='links-list'>
            <li>
              <a
                href='https://hostdefense.com/'
                target='_blank'
                rel='noopener noreferrer'>
                Host Defense
              </a>{' '}
              - Real wellness with natural intelligence. Harnessing the power of
              mushrooms to support your health.
            </li>
            <li>
              <a
                href='http://mushroom-collecting.com/index.html'
                target='_blank'>
                Mushroom Collecting
              </a>{' '}
              - A very informative site about the mushrooms of New England and
              Eastern Canada. Well-written with a great sense of humor. Be sure
              to admire the beautiful pictures.
            </li>

            <li>
              <a href='https://www.wildmanstevebrill.com/' target='_blank'>
                Wild Man Steve Brill
              </a>{' '}
              - Learn about edible and medicinal wild vegetables, herbs, greens,
              fruits, berries, nuts, seeds, and mushrooms with NYC's favorite
              naturalist, "Wildman" Steve Brill. Find out about his public Wild
              Food and Ecology tours in local parks, and the work he does with
              kids. Read excerpts from his books, enjoy his botanical artwork
              and vegetarian recipes, and find out what happened after he was
              arrested and handcuffed by undercover NYC park rangers for eating
              a dandelion in Central Park!
            </li>

            <li>
              <a
                href='https://www.thegreatmorel.com/'
                target='_blank'
                rel='noopener noreferrer'>
                The Great Morel
              </a>{' '}
              - THE site on the Internet for morel mushrooms. Everything you
              could ever want to know including recipes, tips on finding them,
              stories, and wonderful pictures.
            </li>
            <li>
              <a
                href='https://www.thegreatmorel.com/'
                target='_blank'
                rel='noopener noreferrer'>
                The Great Morel
              </a>{' '}
              - THE site on the Internet for morel mushrooms. Everything you
              could ever want to know including recipes, tips on finding them,
              stories, and wonderful pictures.
            </li>
            <li>
              <a
                href='http://mushroaming.com/'
                target='_blank'
                rel='noopener noreferrer'>
                Daniel Winkler's MushRoaming
              </a>{' '}
              - A fascinating site on mushrooms in Tibet, particularly
              cordyceps. Daniel Winkler knows his stuff and his site is full of
              interesting information and excellent pictures. He evens offers
              nature-focused tours in Tibet!
            </li>
            <li>
              <a
                href='http://www.morelmania.com/'
                target='_blank'
                rel='noopener noreferrer'>
                Morel Mania, Inc.
              </a>{' '}
              - Still crazy about morels? This site lists events, morel mushroom
              sightings, and a catalog of products. Warning: will make you long
              for spring.
            </li>
            <li>
              <a
                href='http://www.thenibble.com/reviews/main/vegetables/specialty-mushrooms.asp'
                target='_blank'
                rel='noopener noreferrer'>
                The Nibble Magazine
              </a>{' '}
              - Interesting online magazine about specialty foods. The link
              takes you to the mushroom section, but they have other good
              articles as well. (For example, did you know that July 26th is
              National Milkshake Day!?)
            </li>
            <li>
              <a
                href='https://www.untamedfeast.com/'
                target='_blank'
                rel='noopener noreferrer'>
                Untamed Feast
              </a>{' '}
              - A wild mushroom products website with many fun and beautiful
              harvesting videos.
            </li>
            <li>
              <a
                href='http://www.elfram.com/fungi/fungi_home.html#top'
                target='_blank'
                rel='noopener noreferrer'>
                Fungi of Australia
              </a>{' '}
              - If you're interested in fungi from other parts of the world, be
              sure to stop by Bill Leithead's fungi pages. Here you'll find
              identification tips, general fungi info, and lots and lots of
              great pictures. It seems like there's not a lot out there about
              fungi of Australia, and Bill's site is a great source of info.
            </li>
          </ul>
        </Col>
      </Row>
      <br />
    </div>
  )
}

export default LinksInfo
