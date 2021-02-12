import anecdoteServices from '../services/anecdotes'

// main reducer
const reducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)
  switch(action.type) {
    case 'VOTE': 
      return state.map(anecdote => 
        anecdote.id !== action.data.id 
          ? anecdote 
          : { ...anecdote, votes: anecdote.votes + 1 }
        )
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return action.anecdotes
    default: 
      return state
  }
}

// action creator (thunk middleware)
export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteServices.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

// action creator (thunk middleware)
export const voteTo = (anecdote) => {
  return async dispatch => {
    const newAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    await anecdoteServices.updateOne(anecdote.id, newAnecdote)
    dispatch({
      type: 'VOTE',
      data: { id: anecdote.id }
    })
  }
}

// action creator (thunk middleware)
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteServices.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      anecdotes
    })
  }
}

export default reducer