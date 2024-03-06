import React, { useEffect, useState } from 'react'

const About = () => {
  const [char, setChar] = useState([])

  useEffect(() => {
    const getInfo = async () => {
      const infoFromApi = await fetchInfo()
      // setChar()
    }
    getInfo()
  }, [char])


  const fetchInfo = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json()
    // console.log(data)
    console.log(data.results)
    setChar(data.results)
    
    // return data
    // const characters = data.results
  }

  // fetchInfo()

  return (
    <>
      <h1>About</h1>
      <div>
        {/* <li {.map()}>Characters</li> */}
        {char.map((eachChar) => <li key={eachChar.id}>{eachChar.name}</li>)}
      </div>
    </>
  )
}

export default About