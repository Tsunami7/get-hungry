import React from 'react'
import Header from '../Header/'
import Recipe from '../Recipe/Recipe'
import Footer from '../Footer/'

function Main() {


    return (
        <div className='body-container'>
            <Header />
            <main>
                <Recipe />
            </main>
            <Footer />
        </div>
    )
}

export default Main