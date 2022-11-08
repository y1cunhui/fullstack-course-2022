import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint32Array(anecdotes.length))

  const randomAnecdote = () => {
    const r = Math.round(Math.random() * (anecdotes.length - 1))
    setSelected(r)
  }

  const voteForOne = () => {
    let copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const maxVoted = 
    anecdotes.map((x, i) => [x, i]).reduce((r, a) => (
      votes[r[1]] > votes[a[1]] ? r : a
    ))[0]
  
  
  const maxVotes = 
      votes.reduce((r, a) => (
        r > a ? r : a
      ))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={voteForOne}>vote</button>
      <button onClick={randomAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{maxVoted}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

export default App
