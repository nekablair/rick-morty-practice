import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'

const Characters = () => {

  const [char, setChar] = useState([])
  const [image, setImage] = useState('')

  useEffect(() => {
    const getInfo = async () => {
    const infoFromApi = await fetchInfo()
    }
    getInfo()
  }, [setChar])

  const fetchInfo = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json()
    console.log(data.results)
    setChar(data.results)
  }

// function BasicExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

  return (
    <>
      <h1>Characters from Rick and Morty</h1>
        <Row xs={1} md={2} className="g-4">
        {char.map((eachChar) => 
          <div key={eachChar.id}>
            <Card border="primary" style={{ width: '26rem'}}>
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
    </>
  )
}

export default Characters