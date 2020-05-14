import React, { useEffect, Fragment, useContext} from 'react'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'

const User = ({ match }) => {
    const githubContext = useContext(GithubContext)
    
    const { user, loading, getUser, getUserRepos, repos } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    }, [])

    const {
        name,
        avatar_url,
        location,
        company,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists, 
        hireable 
    } = user;

    if(loading) return <Spinner />

    return (
        <Fragment> 
            <Link to='/' ><i className="fas fa-chevron-left" style={{ paddingRight: '10px'}}/>Back to Search</Link>

            <div className="grid-2" style={section}>
                <div className="all-center">
                    <img src={avatar_url} className="round-img" alt="" style={{ width: '150px'}} />
                    <h2>{name}</h2>
                    <p><i className="fas fa-map-marker-alt"></i> {location}</p>
                    <p>Hireable: {' '}
                            { hireable ? ( 
                                <i className="fas fa-check text-success"/> 
                            ) : (
                                <i className="fas fa-times-circle text-danger"/> 
                            )}</p>
                    <div style={{ textAlign: 'center'}}>
                        <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                    </div>
                </div>
                <div style={{ paddingTop: '25px' }}>
                    { bio && (
                    <Fragment>
                        <p>{bio}</p>
                    </Fragment>
                    )}
                    <br />
                    <ul>
                        <li>
                            { login && <Fragment>
                                <i className="fas fa-user"></i> {login}
                            </Fragment>}
                        </li>
                        <li>
                            { company && <Fragment>
                                <i className="fas fa-users"></i> {company}
                            </Fragment>}
                        </li>
                        <li>
                            { blog && <Fragment>
                                <i className="fas fa-globe"></i> {blog}
                            </Fragment>}
                        </li>
                    </ul>

                    <div className="text-center" style={{ margin: '1rem 0' }}>
                        <div className="badge badge-primary">Followers: {followers} </div>
                        <div className="badge badge-success">Following: {following} </div>
                        <div className="badge badge-light">Public Repos: {public_repos} </div>
                        <div className="badge badge-dark">Public Gists: {public_gists} </div>
                    </div>

                    
                </div>
            </div> 

            <Repos repos={repos} /> 
        </Fragment>
    );
}

const section = {
    padding: '1rem',
  margin: '0.7rem 0'
}

export default User