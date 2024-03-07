import { useEffect, useState } from "react";
import './About.css'

const About = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const infoFromApi = await fetchInfo();
    };
    getInfo();
  }, []);

  const fetchInfo = async () => {
    const res = await fetch("https://rickandmortyapi.com/api");
    const data = await res.json();
    console.log(data);
    setResult(data);
  };

  return (
    <>
      <div className="text-center p-5">
        <h1 className="p-5">About Ricky and Morty</h1>
        <p className="p-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
          sapiente ducimus. Earum illo in nostrum, facilis possimus animi
          exercitationem iure iusto, delectus culpa aliquid, esse illum sint.
          Aspernatur, voluptate voluptatibus.
        </p>
      </div>
    </>
  );
};

export default About;
