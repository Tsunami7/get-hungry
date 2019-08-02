/**eslint-disable */
import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about-page">
            <h3 className="about-title">About The API</h3>
            <p className="about-api">The API used in this project</p>
            <h3 className="edaman-link"><a href="https://developer.edamam.com/" target='https://developer.edamam.com/'>EDAMAM</a></h3>
            <div className="about-p-container">
            <p className="about-p"> EDAMAM manages thousands of recipes. They structure data from nutrition profile, allergens, foods used, and diet appropriateness which helps a lot to your business to markets its recipe content. Using a manual labor to do this is just not practical as it slow and expensive.</p>
            <div></div>
            <p className="about-p"> EDAMAN structures the data for a recipe in seconds. So, several thousand recipes take several hours at most. The output provides to the publisher by EDAMAM details the most specific ingredients from each ingredient lines, their quantities and even their mapping to known existing government ingredient databases. In addition, each recipe is tagged with 40+ diet and allergen tags which allows creation of collective and better search engine.</p>
            </div>
            <h3>EDAMAM's affiliations: </h3>
            <div className='imgs'></div>
        </div>
    )
}

export default About