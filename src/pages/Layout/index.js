import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Footer, Header, Services, Blogpost, Cta, Feature } from '../../components'


const Layout = () => {
    return (
        <Router>
            <Header />
            <Services />
            <Blogpost />
            <Feature />
            <Cta />
            <Footer />
        </Router>
    )
}

export default Layout
