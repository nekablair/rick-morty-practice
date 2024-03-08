import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import CharCard from '../components/CharCard';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import axios from 'axios'

const Characters = () => {

  const [char, setChar] = useState([])
  const [pages, setPages] = useState(1)
  // const [image, setImage] = useState('')

  const fetchInfo = async () => {
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pages}`)
      // const data = await res.json()
      // console.log(data.results)
      // setChar(data.results)
      console.log(res.data.results)
      const data = res.data.results
      setChar([...char, ...data]) //one request of all the characters in one array
      setPages(pages+1)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (pages < 10){
      fetchInfo()
    }
  }, [pages])

  useEffect(() => {
    console.log(char)
  }, [char])

  // fetchInfo()


  // const changePage = async(pages) => {
  //   // try {
  //     const res = await axios.get(`https://rickandmortyapi.com/api/?page=${pages}`)
  //     console.log(res.data.results)
      // setChar([ ...char, res.data.results])
      // setPages(pages+1)
    // } catch (error) {
    //   console.error(error)
    // }
  // }

  
  // useEffect(() => {
  //     changePage()
  //   }, [pages])

  // useEffect(() => {
  //   console.log(char)
  // }, [char])

  return (
    <>
      {/* <h1 className='text-center p-4'>Characters from Rick and Morty</h1> */}
      <Container className='d-flex flex-column p-5' >
      <h1 className='text-center p-4'>Characters from Rick and Morty</h1>
      <Row xs={1} md={1} lg={2} xxl={3} className="g-5 align-items-center p-3">
        {char.map((c) => (
          <CharCard key={c.id} id={c.id} name={c.name} image={c.image}/>
        ))}
        </Row>
        {/* <button onClick={changePage}>Next Page</button> */}
            </Container>
            {/* <button onClick={changePage}>Next Page</button> */}
    </>
  )
}

export default Characters
