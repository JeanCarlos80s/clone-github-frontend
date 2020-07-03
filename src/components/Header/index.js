import React from 'react'

import logoHeader from '../../assets/GitHub-Mark-Light-32px.png'
import './styles.css'


function Header() {
    return (
        <header id="main-header">
            <img src={logoHeader} alt="Logo Github"/>
            <nav>
                <ul>
                    <li>Why GitHub?</li>
                    <li>Team</li>
                    <li>Enterprise</li>
                    <li>Explore</li>
                    <li>Marketplace</li>
                    <li>Pricing</li>
                </ul>
            </nav>
            <form>
                <input type="text" placeholder="Search" />
            </form>
            <a className="headerSignin" href="#">Sign in</a>
            <a className="headerButton" href="#">Sign up</a>
        </header>
    )
}

export default Header