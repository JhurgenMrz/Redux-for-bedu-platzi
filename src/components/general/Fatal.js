import React from 'react'
import './Fatal.css'

const Fatal = (props) => {
    return (
        <div>
            <h1>404 Error Page #1</h1>
            <p class="zoom-area"><b>:C</b> {props.message}</p>
            <section class="error-container">
            <span><span>4</span></span>
            <span>0</span>
            <span><span>4</span></span>
            </section>
            <div class="link-container">
            <a target="_blank" href="https://www.silocreativo.com/en/creative-examples-404-error-css/" class="more-link">Visit the original article</a>
            </div>
        </div>
    )
}

export default Fatal
