import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteTo } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)

    // filter anecdotes by filter specified by the user
    const anecdotesToShow = filter !== ''
        ? anecdotes.filter(anecdote => anecdote.content.includes(filter))
        : anecdotes

    // vote for anecdote
    const voteForAnecdote = (anecdote) => {
        dispatch(voteTo(anecdote)) // increase votes
        dispatch(createNotification(`voted for '${anecdote.content}'`)) // display notification
        setTimeout(() => dispatch(createNotification('')), 3000)
    }

    return (
        <div>
            {anecdotesToShow.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => voteForAnecdote(anecdote)}
                />
            )}
        </div>
    )
}

export default AnecdoteList