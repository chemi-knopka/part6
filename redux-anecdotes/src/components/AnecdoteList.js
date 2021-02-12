import React from 'react'
import { connect } from 'react-redux'
import { voteTo } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

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

const AnecdoteList = (props) => {
    // vote for anecdote
    const voteForAnecdote = (anecdote) => {
        props.voteTo(anecdote) // increase votes
        props.setNotification(`voted for '${anecdote.content}'`, 3000)
    }

    return (
        <div>
            {props.anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => voteForAnecdote(anecdote)}
                />
            )}
        </div>
    )
}

// containers 
const mapStateToProps = (state) => {
    if (state.filter) {
        return {
            anecdotes: state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
        }
    }
    return state
}

const mapDispatchToProps = {
    voteTo,
    setNotification
}

const ConnectedAnecdotes = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AnecdoteList)
export default ConnectedAnecdotes