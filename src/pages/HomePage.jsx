import React from "react";
import AImage from "../assets/rickmorty.jpeg";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"
import './HomePage.css'

const HomePage = () => {
  return (
    <>
        <div className="text-center jumbo jumbotron-fluid">
      {/* <Container fluid> */}

        {/* <Image src='./assets/rickmorty.jpeg' fluid /> */}
        {/* <h1 className="display-4">HomePage</h1> */}
        <h1 className="display-1 p-4 fw-bold">
          Watch Rick and Morty <br /><a href="https://rickandmortyapi.com/"   target="blank">Here!</a>
        </h1>
        <a href="https://rickandmortyapi.com/" target="blank"><Image src={`${AImage}`} fluid className="pt-3 shadow-lg image-zoom" /></a>
      {/* </Container> */}
        </div>
    </>
  );
};

export default HomePage;
