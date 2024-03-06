import React, { useEffect, useState } from 'react'

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
      <div>Characters</div>
      <ul>
          {char.map((eachChar) => <li key={eachChar.id}>{eachChar.name}</li>)}
      </ul>
    </>
  )
}

export default Characters