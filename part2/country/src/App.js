

import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"

const LanguageList = ({languages}) => {
  console.log(languages)
  console.log([
    languages.map((l) => (
    <ul key={l}>{l}</ul>
    ))
])
  return [
    languages.map((l) => (
    <ul key={l}>{l}</ul>
    ))
]}
const Country = ({countries}) => {

  if (countries.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countries.length > 1) {
    return [
      countries.map((country) => (
          <p key={country.name.common}>{country.name.common}</p>

      ))
    ]
  } else if (countries.length == 1){
    const country = countries[0]
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h3>languages: </h3>
        <LanguageList languages={Object.values(country.languages)}/>
        <img src={country.flags.png}/>
      </div>
    )
  } else return <p></p>
}

const App = () => {
  const [allContries, setAllContries] = useState([])
  const [contries, setContries] = useState([])

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {

        setAllContries(response.data)
      })
      
  }, [])

  const handleInputChange = (event) => {
    event.preventDefault()
    const s = event.target.value
    setContries(
      allContries.filter((c) => c.name.common.indexOf(s) != -1)
    )
  }

  return (
    <div>
      find countries
      <input onChange={handleInputChange}/>
      <Country countries={contries}/>
    </div>
  )


}

export default App;
