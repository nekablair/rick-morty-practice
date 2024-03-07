import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
      <h1 className='text-center p-4'>Characters from Rick and Morty</h1>
      {/* <Container className='d-flex flex-column p-5 d-flex' >
      // <h1 className='text-center p-4'>Characters from Rick and Morty</h1>
  <Row xs={1} md={1} lg={2} xxl={3} className="g-5 align-items-center p-3"> */}

        {/* {char.map((eachChar) => (
          <div key={eachChar.id}>
            <Card border="primary" style={{ width: 'auto'}}>
              <Card.Img src={eachChar.image} />
              <Card.Body>
              <Card.Title>{eachChar.name}</Card.Title>
              <Card.Text>
              {eachChar.status} <br />
              {eachChar.species} <br />
              {eachChar.gender}
              </Card.Text>
              <Link to='character'><Button variant="primary">Find Out More</Button></Link>
                
              </Card.Body>
              </Card>
              </div>)
        )} */}

        {/* </Row> */}
        {/* <button onClick={changePage}>Next Page</button> */}
            {/* </Container> */}
            {/* <button onClick={changePage}>Next Page</button> */}
    </>
  )
}

export default Characters
