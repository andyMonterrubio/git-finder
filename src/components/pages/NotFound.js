import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1 className='header404'>The page you are looking for does not exists...</h1>
            <section className="error-container">
                <span className="four"><span className="number">4</span></span>
                <span className="zero"><span className="number">0</span></span>
                <span className="four"><span className="number">4</span></span>
            </section>
            <div className="link-container">
                <Link to='/' className="btn home-link"><i className="fas fa-chevron-left" style={{ paddingRight: '10px'}}/>Go back to Home</Link>
            </div>
        </div>
    )
}

export default NotFound