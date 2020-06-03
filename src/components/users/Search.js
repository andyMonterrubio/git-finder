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
            githubContext.hideNoUsers();
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }

    const onFocus = () => document.getElementById("animation").classList = "input-container";

    const onFocusOut = () => {
        let input = document.getElementById("text");
        if(input.value.length === 0)
            document.getElementById("animation").classList = "input-container input-text-animation";
    }

    return (
        <div>
            <div className="wrap">
                <div className="search">
                    <form onSubmit={onSubmit} >
                        <div id="animation" className="input-container input-text-animation">
                            <input id="text" type="text" name="text" className="searchTerm" value={text} onChange={onChange} onFocus={onFocus} onBlur={onFocusOut} />
                        </div>
                        <button type="submit" className="searchButton"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>


            {
                githubContext.noUsers === true &&
                <div className="alert alert-dark">
                    <i className="fas fa-info-circle faa-pulse animated" style={{ paddingRight: '10px' }} />No users have been found
                </div>
            }

            { githubContext.users.length > 0 && 
                ( <button className="btn btn-light btn-block clear" onClick={githubContext.clearUsers}>Clear Results</button>)
            }
            
        </div>
    )
}

export default Search
