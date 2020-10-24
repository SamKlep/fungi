import React from 'react'
import { Image, Container, Row, Col } from 'react-bootstrap'
import BreathePills from '../BreathePills'

const Breathe = () => {
  return (
    <Container>
      <BreathePills />
      <Container className='justify-content-md-center'>
        <h1 className='display-4 text-center justify-content-md-center'>
          Breathe
        </h1>

        <Row className='justify-content-md-center'>
          <Col lg='8' className='lead mb-5'>
            <p>
              Cultures around the world have eaten or used mushrooms medicinally
              for centuries, dating all the way back to ancient Egypt. Legend
              has it that pharaohs liked their earthy flavor so much, they
              declared the fungi royalty food and forbid commoners from touching
              them. Those greedy pharaohs kept the entire supply for themselves.
            </p>
            <p>
              Fast forward 5,000 years or so to the 19th century, when mushroom
              production made its way from France (where it began in the 1600s
              under King Louis XIV) across the Atlantic to America. Today, the
              billion-dollar industry grows nearly 900 million pounds of
              mushrooms each year, and we're the second leading mushroom grower
              in the world behind China, according to the Agricultural Marketing
              Resource Center.
            </p>
            <p>
              Estimates vary on the number of edible varieties from 300 to
              2,000, but only about 10 are grown commercially, according to the
              University of Idaho. Americans gobble down white button, oyster
              and shiitake mushrooms the most, but many varieties hide
              nutritional superpowers under their white or brown caps and gills.
            </p>
            <p>
              Whether you eat them raw or cooked (you should cook them, but more
              on that later), here are some of the health benefits you'll get
              when you add mushrooms to your diet.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='justify-content-md-center bg-light p-5'>
          <Col xs lg='4' className='mb-3'>
            <img src='/img/fungus.jpeg' alt='' />
          </Col>
          <Col md='8' className='mb-3'>
            <p>
              <strong>1. They have cancer-fighting properties.</strong> A study
              published in the journal Experimental Biology and Medicine tested
              five types of mushrooms (maitake, crimini, portabella, oyster and
              white button) and found that they "significantly suppressed"
              breast cancer cell growth and reproduction, suggesting "both
              common and specialty mushrooms may be chemoprotective against
              breast cancer."
            </p>
          </Col>
        </Row>
        <Row className='justify-content-md-center p-5'>
          <Col md='8' className='mb-3'>
            <p>
              <strong>2. Mushrooms are immunity-boosters. </strong>We now know
              that lentinan can boost your immune system, but it has a helper,
              too. Beta-glucan is a sugar found in the cells walls of fungi
              (among other plants) that also helps boost your immune system.
              Lentinan comes from shiitake mushrooms, but beta-glucan is found
              in many varieties, namely the common button mushrooms.
            </p>
          </Col>
          <Col xs lg='4' className='mb-3'>
            <img src='/img/fungus.jpeg' alt='' />
          </Col>
        </Row>
        <Row className='justify-content-md-center bg-light p-5'>
          <Col xs lg='4' className='mb-3'>
            <img src='/img/fungus.jpeg' />
          </Col>
          <Col md='8' className='mb-3'>
            <p>
              <strong>3. They help lower cholesterol.</strong> In general,
              mushrooms are cholesterol free, but they're also a good source of
              chitin and beta-glucan, which are fibers that lower cholesterol. A
              study in the International Journal of Medicinal Mushrooms in the
              International Journal of Medicinal Mushrooms found that pink
              oyster mushrooms reduced total cholesterol and LDL ("bad"
              cholesterol) in hypercholesterolemic rats.
            </p>
          </Col>
        </Row>
        <Row className='justify-content-md-center p-5'>
          <Col md='8' className='mb-3'>
            <p>
              <strong>4. They're high in B and D vitamins.</strong> Mushrooms
              are one of the few food sources for vitamin D, a fat-soluble
              vitamin that our bodies can make with exposure to sunlight,
              because growers are exposing their crops to small amounts of
              ultraviolet light, WebMD reports. Button mushrooms and criminis in
              particular are high in vitamin D, but criminis are high in another
              key vitamin, too: vitamin B12, which is key for vegetarians as
              it's most often found in animal products. B vitamins are important
              because they convert food into fuel for our bodies, giving us
              energy; D vitamins are important because they help our bodies
              absorb calcium and promote bone growth.
            </p>
          </Col>
          <Col xs lg='4' className='mb-3'>
            <img src='/img/fungus.jpeg' />
          </Col>
        </Row>
        <Row className='justify-content-md-center bg-light p-5'>
          <Col xs lg='4' className='mb-3'>
            <img src='/img/fungus.jpeg' alt='' />
          </Col>
          <Col md='8' className='mb-3'>
            <p>
              <strong>5. Mushrooms have anti-inflammatory powers.</strong> Axe
              says mushrooms contain a powerful antioxidant called
              ergothioneine, which helps lower inflammation throughout the body.
              Weil adds that reishi mushrooms in particular, which have been
              used medicinally in Asia for thousands of years, also have
              significant anti-inflammatory effects. Multiple studies have shown
              that reishi mushrooms have multiple health benefits: They fight
              disease, lower inflammation, suppress allergic responses, reduce
              tumor growth and more.
            </p>
          </Col>
        </Row>
        <Row className='justify-content-md-center p-5'>
          <Col md='8' className='mb-3'>
            <p>
              <strong>6. 'Magic' mushrooms may help cancer patients.</strong> In
              a pair of separate clinical trials at Johns Hopkins University
              School of Medicine and New York University Langone Medical Center,
              80 cancer patients suffering from anxiety, depression or a fear of
              death were given psilocybin, a naturally occurring psychedelic
              compound found in roughly 200 kinds of mushrooms. About 80% of
              them experienced "an increase in optimism, a feeling of connection
              with other people and mystical and spiritual experiences. The
              effects persisted through the six-month follow-up period," the
              Washington Post reports. The research, published in the Journal of
              Psychopharmacology, suggests that psilocybin might be beneficial
              for people with depression or post-traumatic stress disorder.
            </p>
          </Col>
          <Col xs lg='4' className='mb-3'>
            <img src='/img/fungus.jpeg' />
          </Col>
        </Row>
        <Row className='justify-content-md-center bg-light p-5'>
          <Col xs lg='4' className='mb-3'>
            <img src='/img/fungus.jpeg' alt='' />
          </Col>
          <Col md='8' className='mb-3'>
            <p>
              <strong>7. They could help fight aging.</strong> In a study at
              Penn State, researchers found that mushrooms have high amounts of
              two antioxidants, ergothioneine and glutathione, which are both
              associated with anti-aging properties. "What we found is that,
              without a doubt, mushrooms are [the] highest dietary source of
              these two antioxidants taken together, and that some types are
              really packed with both of them," said Robert Beelman, professor
              emeritus of food science and director of the Penn State Center for
              Plant and Mushroom Products for Health, in a statement. The
              amounts of the antioxidants vary by species; the winner "by far"
              was the wild porcini mushroom, researchers said.
            </p>
          </Col>
        </Row>
      </Container>

      <br />
    </Container>
  )
}

export default Breathe
