import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import axios from 'axios'

const Characters = () => {

  const [char, setChar] = useState([])
  // const [image, setImage] = useState('')

  useEffect(() => {
    const getInfo = async () => {
    const infoFromApi = await fetchInfo()
    }
    getInfo()
  }, [setChar])

  const fetchInfo = async () => {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character")
      // const data = await res.json()
      // console.log(data.results)
      // setChar(data.results)
      console.log(res.data.results)
      const data = res.data.results
      setChar(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      
      <Container className='d-flex flex-column p-5 d-flex' >
      <h1 className='text-center'>Characters from Rick and Morty</h1>
        <Row xs={1} md={1} lg={2} xxl={3} className="g-5 align-items-center">
        {char.map((eachChar) => 
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
              <Button variant="primary" onClick={() =>  <Link to={eachChar.url}></Link> }>Visit {eachChar.name}</Button>
                
              </Card.Body>
              </Card>
              </div>
        )}
        </Row>
            </Container>
    </>
  )
}

export default Characters