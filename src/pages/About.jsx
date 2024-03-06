import { useEffect, useState } from 'react'

const About = () => {
  const [result, setResult] = useState([])

  useEffect(() => {
    const getInfo = async () => {
    const infoFromApi = await fetchInfo()
    }
    getInfo()
  }, [])

  const fetchInfo = async () => {
    const res = await fetch("https://rickandmortyapi.com/api")
    const data = await res.json()
    console.log(data)
    setResult(data)
    // console.log(data)
  }

  return (
    <>
      <h1>About Ricky and Morty</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, sapiente ducimus. Earum illo in nostrum, facilis possimus animi exercitationem iure iusto, delectus culpa aliquid, esse illum sint. Aspernatur, voluptate voluptatibus.
      </p>
    </>
  )
}

export default About