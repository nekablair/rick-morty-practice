import React, { useEffect, useState } from 'react'

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
  }

  return (
    <>
      <h1>About</h1>
      {/* {result.map((eachChar) => <li key={eachChar.id}>{eachChar.name}</li>)} */}
    </>
  )
}

export default About