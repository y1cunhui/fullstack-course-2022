import { useState } from 'react'

const Person = ({person}) => 
  <p>{person.name} {person.number}</p>


const Persons = ({persons}) => {
  return persons.map((person) => 
    <Person key={person.name} person={person}/>
  )
}

const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {
  const handleNewnameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)    
  }

  const handleNewnumberChange = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)   
  }

  const addPerson = (event) => {
    
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.findIndex((elem) => elem.name == newName) != -1) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
    }
    
  }

  return (
  <form onSubmit={addPerson}>
    <div>name: <input value={newName} onChange={handleNewnameChange}/></div>
    <div>number: <input value={newNumber} onChange={handleNewnumberChange}/></div>
    <div><button type="submit">add</button></div>
  </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm 
        persons={persons} 
        setPersons={setPersons} 
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        />
      
      <h2>Numbers</h2>
      
      <Persons persons={persons}/>
    </div>
  )
}

export default App