import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Characters = () => {

  const [char, setChar] = useState([])

  useEffect(() => {
    const getInfo = async () => {
    const infoFromApi = await fetchInfo()
    }
    getInfo()
  }, [])

  const fetchInfo = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json()
    console.log(data.results)
    setChar(data.results)
  }

  return (
    <>
      <h1>Characters from Rick and Morty</h1>
          {char.map((eachChar) => 
          <div key={eachChar.id}>
              <h6>{eachChar.name}</h6>
              <p>
              {eachChar.status}
              </p>
              <p>
              {eachChar.gender}
              </p>
              <img src={eachChar.image} />
              <Link to={eachChar.url} />
              </div>
        )}
    </>
  )
}

export default Characters