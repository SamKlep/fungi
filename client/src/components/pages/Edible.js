import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../App.css'
import EdibleGrid from '../../components/edible/EdibleGrid'
import EdibleContent from '../edible/EdibleContent'
import { Container, Button } from 'react-bootstrap'
import Pages from '../ui/Pagination'

const Breathe = () => {
  const [fungi, setFungus] = useState([])
  const [isLoading, setIsLoading] = useState([true])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`/api/v1/fungus?edible=true`)
      console.log(result.data)
      setFungus(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])

  // Get current post
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = [fungi].slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <Container>
      <br />
      <a href='/explore'>
        <Button className='mr-auto' size='lg' variant='outline-info'>
          Go back
        </Button>
      </a>
      <div className='container mt-5 mb-5'>
        <EdibleContent />
        <EdibleGrid isLoading={isLoading} fungi={fungi} />
      </div>
      <br />
      <Pages
        postsPerPage={postsPerPage}
        totalPosts={[fungi].length}
        paginate={paginate}
      />
      <br />
      <br />
    </Container>
  )
}

export default Breathe
