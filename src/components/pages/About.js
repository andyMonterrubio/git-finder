import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
            <h1 style={{ margin: '20px 0px'}}>About Github Finder</h1>
            <p>Github Finder is a web application to find Github users by username, name, etc. <br/>
            The application shows the user's github profile, repositories and more! <br/><br/>
            If you want to try the application, just go to the home page and type a name/username.</p>
            <p>This web app has been developed using:</p>
            <div style={{ margin: '1rem 0 3rem 0' }}>
                <div className="badge">ReactJs</div>
                <div className="badge">React Hooks</div>
                <div className="badge">Context API </div>
                <div className="badge">Axios </div>
                <div className="badge">CSS Grid</div>
                <div className="badge">CSS Animations </div>
                <div className="badge">Responsive desing</div>
            </div>
            <p>Checkout the Github repo <a href="https://github.com/andyMonterrubio/git-finder" rel="noopener noreferrer" 
            target='_blank' style={{textDecoration: 'underline', fontWeight: 'bold'}}>here</a>.</p>
            <footer>
                <p>Created by<br className="mobile" /> <a href='http://www.linkedin.com/in/andrea-hernandez-monterrubio' rel="noopener noreferrer" 
            target='_blank' style={{ textDecoration: 'underline'}}>Andrea Hernandez</a> <span style={{ float:'right' }}>Version 1.0</span></p>
            </footer>

        </Fragment>
    )
}

export default About
