import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/AlertContext'

const Search = () => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

    const [text, setText]= useState('')

    const onChange = e => setText(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        if(text === ''){
            alertContext.setAlert('Please enter a username', 'light')
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange} />
                    <button type="submit" className="btn-dark"><i className="fas fa-search"></i></button>
            </form>
            { githubContext.users.length > 0 && 
                ( <button className="btn btn-light btn-block clear" onClick={githubContext.clearUsers}>Clear Results</button>)
            }
            
        </div>
    )
}

export default Search
