import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Character = () => {
    const [character, setCharacter] = useState({})
    // URL Params 
    // "character/:id"
    const { id } = useParams()
    // console.log(id)

    const getCharacter = async() => {
        let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        let data = response.data
        // const [ name, image, species, location, origin ] = data
        // setCharacter([ data.name, data.image, data.species, data.location.name, data.origin.name ])
        setCharacter({"name": data.name, "image": data.image, "species": data.species, "location": data.location.name, "origin": data.origin.name})
        console.log(response.data)
    }

    useEffect(() => {
        getCharacter()
    }, [])

    useEffect(() => {
        console.log(character)
    }, [character])


  return (
    <>
        <div>Character</div>
        <h2>{character.name}</h2>
        <img src={character.image} />
        <ul>
            <li>Name: {character.species}</li>
            <li>Species: {character.location}</li> 
            <li>Location: {character.origin}</li>
        </ul>
    </>
  )
}

export default Character
