import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'


const CharCard = ( { name, image }) => {


    const getDetails = () => {
        console.log("click")
    }

  return (
    <>
    <div>CharCard</div>
    {/* <Container className='d-flex flex-column p-5 d-flex' >
      // <h1 className='text-center p-4'>Characters from Rick and Morty</h1>
    <Row xs={1} md={1} lg={2} xxl={3} className="g-5 align-items-center p-3"> */}
    {/* {char.map((eachChar) => ( */}
        {/* <div key={eachChar.id}> */}
        <Card border="primary" style={{ width: 'auto'}}>
            <Card.Img src={image} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            {/* <Card.Text> */}
            {/* {eachChar.status} <br /> */}
            {/* {eachChar.species} <br /> */}
            {/* {eachChar.gender} */}
            {/* </Card.Text> */}
            {/* <Link to='character'><Button variant="primary">Find Out More</Button></Link> */}
            <Link to={'/character'}><Button variant="primary" onClick={getDetails}>Get Details</Button></Link>
            </Card.Body>
        </Card>
            {/* </div> */}
            {/* ) */}
      {/* )} */}
      </>
  )
}
//may need to use prop types here...

export default CharCard