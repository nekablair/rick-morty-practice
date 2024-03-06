import React from "react";
import AImage from "../assets/rickmorty.jpeg";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"

const HomePage = () => {
  return (
    <>
        <div className="text-center jumbo jumbotron-fluid">
      {/* <Container fluid> */}

        {/* <Image src='./assets/rickmorty.jpeg' fluid /> */}
        {/* <h1 className="display-4">HomePage</h1> */}
        <h1 className="display-1">
          Watch Rick and Morty <a href="https://rickandmortyapi.com/">Here</a>
        </h1>
        <Image src={`${AImage}`} fluid />
      {/* </Container> */}
        </div>
    </>
  );
};

export default HomePage;
