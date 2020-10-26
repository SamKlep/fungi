import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'

const LinksInfo = () => {
  return (
    <div className='text-center container mt-5 mb-3'>
      <Row className='justify-content-md-center pill-links'>
        <Col lg='8'>
          <h1 className='display-4'>Links</h1>
          <Image className='mb-3' src='/img/fungus.jpeg' />
          <p>
            Here you'll find some great mushroom links and free information.
            Discover mushroom websites, articles, and other free resources along
            with recommendations for quality products. Check it out!
          </p>

          <br />
          <ul>
            <h1 className='display-4'>Great Mushroom Links</h1>
            <li>
              Mushroom Collecting - A very informative site about the mushrooms
              of New England and Eastern Canada. Well-written with a great sense
              of humor. Be sure to admire the beautiful pictures.
            </li>

            <li>
              Wild Man Steve Brill - Learn about edible and medicinal wild
              vegetables, herbs, greens, fruits, berries, nuts, seeds, and
              mushrooms with NYC's favorite naturalist, "Wildman" Steve Brill.
              Find out about his public Wild Food and Ecology tours in local
              parks, and the work he does with kids. Read excerpts from his
              books, enjoy his botanical artwork and vegetarian recipes, and
              find out what happened after he was arrested and handcuffed by
              undercover NYC park rangers for eating a dandelion in Central
              Park!
            </li>
            <li>
              Cornell Mushroom Blog - Fungus information from the Mycology
              Department at Cornell University. Lots of great articles and
              pictures that you won't find anywhere else.
            </li>
            <li>
              Radical Mycology - A very interesting mushroom networking blog.
              From their site: "The idea of this new blog is to strengthen the
              existing networks between fungi and their human allies who are
              working to decompose components of industrial civilization, grow
              food, and help facilitate re-wilding. In other words, its a way to
              stay or get in touch with folks working on cool mushroom
              projects." Lots of good and relevant info on mycoremediation.
            </li>
            <li>
              The Mushroom Hunter - More useful knowledge from Central
              Massachusetts.
            </li>
            <li>
              The Great Morel - THE site on the Internet for morel mushrooms.
              Everything you could ever want to know including recipes, tips on
              finding them, stories, and wonderful pictures.
            </li>
            <li>
              Morel Mania, Inc. - Still crazy about morels? This site lists
              events, morel mushroom sightings, and a catalog of products.
              Warning: will make you long for spring.
            </li>
            <li>
              The Nibble Magazine - Interesting online magazine about specialty
              foods. The link takes you to the mushroom section, but they have
              other good articles as well. (For example, did you know that July
              26th is National Milkshake Day!?)
            </li>
            <li>
              Untamed Feast - A wild mushroom products website with many fun and
              beautiful harvesting videos.
            </li>
            <li>
              Daniel Winkler's MushRoaming - A fascinating site on mushrooms in
              Tibet, particularly cordyceps. Daniel Winkler knows his stuff and
              his site is full of interesting information and excellent
              pictures. He evens offers nature-focused tours in Tibet!
            </li>
            <li>
              ungi of Australia - If you're interested in fungi from other parts
              of the world, be sure to stop by Bill Leithead's fungi pages. Here
              you'll find identification tips, general fungi info, and lots and
              lots of great pictures. It seems like there's not a lot out there
              about fungi of Australia, and Bill's site is a great source of
              info.
            </li>
          </ul>
        </Col>
      </Row>
      <br />
    </div>
  )
}

export default LinksInfo
