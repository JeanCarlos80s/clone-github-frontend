import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import repoicon from '../../assets/repo.svg'
import staricon from '../../assets/staricon.svg'
import totalrepo from '../../assets/totalrepo.svg'

import './styles.css'

function MainContent() {
    const [repos, setRepos] = useState([{}])

    useEffect(() => {
        async function loadProfile() {
            const response = await api.get('/repos')
            
            setRepos(response.data)
        }

        loadProfile()
    }, [])

    return (
        <>
        <div className="mainContent">
            <div className="boxSignup">
                <h3>Grow your team on GitHub</h3>
                <p>
                    GitHub is home to over 50 million 
                    developers working together. Join 
                    them to grow your own development teams, 
                    manage permissions, and collaborate on projects.
                </p>
                <a href="#">Sign up</a>
            </div>

            <div className="textTitle">
                <p>Repositories</p>
            </div>

                <div className="boxRepos">
                    {repos.slice(0,12).map(repo => (
                        <div key={repo.id} className="boxes">
                            <div className="content">
                                <div className="boxTitle">
                                    <img src={repoicon} alt=""/>
                                    <a href="#">{repo.name}</a>
                                </div>
                                <p>{repo.description != null ? repo.description : 'Null description'}</p>
                            </div>
                            <ul>
                                <li>
                                    <div className={`repo-language-color-${repo.language}`.toLowerCase()}></div>
                                    <span>{repo.language}</span>
                                </li>
                                <li><img src={staricon} alt=""/>{repo.stargazers_count}</li>
                                <li><img src={totalrepo} alt=""/>{repo.forks_count}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            <div className="separator"></div>


        </div>
        </>
    )
}

export default MainContent