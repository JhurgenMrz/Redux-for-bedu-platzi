import React from 'react'
import './Fatal.css'

const Fatal = (props) => {
    return (
        <div className="Fatal">
            <h1 className="Fatal">404 Error Page</h1>
            <p className="Fatal zoom-area"> 😕 {props.message}</p>
            <section className="Fatal error-container">
            <span className="Fatal"><span>4</span></span>
            <span className="Fatal">0</span>
            <span className="Fatal"><span>4</span></span>
            </section>
            <div className="Fatal link-container"></div>
        </div>
    )
}

export default Fatal
