import React from 'react'
import { Image } from 'react-bootstrap'

const Info = () => {
  return (
    <div className='text-center container mb-5'>
      <Image className='mb-3' src='/img/fungus.jpeg' />
      <h1>What Is a Mushroom?</h1>
      <p>
        A mushroom or toadstool is the fleshy, spore-bearing fruiting body of a
        fungus, typically produced above ground, on soil, or on its food source.
        The standard for the name "mushroom" is the cultivated white button
        mushroom, Agaricus bisporus; hence the word "mushroom" is most often
        applied to those fungi (Basidiomycota, Agaricomycetes) that have a stem
        (stipe), a cap (pileus), and gills (lamellae, sing. lamella) on the
        underside of the cap. "Mushroom" also describes a variety of other
        gilled fungi, with or without stems, therefore the term is used to
        describe the fleshy fruiting bodies of some Ascomycota. These gills
        produce microscopic spores that help the fungus spread across the ground
        or its occupant surface.
      </p>
      <p>
        Forms deviating from the standard morphology usually have more specific
        names, such as "bolete", "puffball", "stinkhorn", and "morel", and
        gilled mushrooms themselves are often called "agarics" in reference to
        their similarity to Agaricus or their order Agaricales. By extension,
        the term "mushroom" can also refer to either the entire fungus when in
        culture, the thallus (called a mycelium) of species forming the fruiting
        bodies called mushrooms, or the species itself.
      </p>
    </div>
  )
}

export default Info
