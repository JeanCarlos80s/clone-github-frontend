import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import pin from '../../assets/pin.svg'
import link from '../../assets/link.svg'
import email from '../../assets/email.svg'
import repo from '../../assets/repo.svg'
import packageicon from '../../assets/packageicon.svg'
import peopleicon from '../../assets/peopleicon.svg'
import projecticon from '../../assets/projecticon.svg'

import './styles.css'

function MainHeader() {
    const [profile, setProfiles] = useState({})

    useEffect(() => {
        async function loadProfile() {
            const response = await api.get('/')

            setProfiles(response.data)
        }

        loadProfile()
    }, [])

    return (
        <>
        <div className="mainHeader">
            <div className="headerContainer">
                <div className="profile">
                    <img src={profile.avatar_url} alt=""/>
                </div>
                <div className="info">
                    <h1>{profile.name}</h1>
                    <ul>
                        <li>
                            <img src={pin} alt=""/>
                            {profile.location}
                        </li>
                        <li>
                            <img src={link} alt=""/>
                            {profile.blog}
                        </li>
                        <li>
                            <img src={email} alt=""/>
                            {profile.email}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navContainer">
                <ul>
                    <li className="selected">
                        <img src={repo} alt=""/>
                        Repositories
                    </li>
                    <li>
                        <img src={packageicon} alt=""/>
                        Packages
                    </li>
                    <li>
                        <img src={peopleicon} alt=""/>
                        People
                    </li>
                    <li>
                        <img src={projecticon} alt=""/>
                        Projects
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default MainHeader