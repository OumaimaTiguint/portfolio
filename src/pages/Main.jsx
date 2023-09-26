import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { Landing, Navbar, About, Contact, Skills, EducationAndExperience } from '../components'

function Main() {
    return (
        <div className='container mx-auto px-4'>
            <HelmetProvider>
                <Helmet>
                    <title>Oumaima Tiguint - Porfolio</title>
                </Helmet>
            </HelmetProvider>
            
            <Navbar /> 
            <Landing />
            <About />
            <Skills />
            <EducationAndExperience />
            <Contact />
        </div>
    )
}

export default Main