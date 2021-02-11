import React, { useEffect }from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import FilterForm from './components/FilterForm'
import anecdoteServices from './services/anecdotes'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteServices
      .getAll().then(anecdotes => dispatch(initializeAnecdotes(anecdotes)))
  })

  return (
    <div>
      <h2>Anecdotes</h2>
      <FilterForm />
      <AnecdoteList />
      <AnecdoteForm />
      <Notification />
    </div>
  )
}

export default App