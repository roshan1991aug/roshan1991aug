import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Repositories.css'
import repoJSONData from './data.json';
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import {Container, Row, Col, Button} from 'react-bootstrap'; 
import githubTrends from 'github-trends-api';
const repoDataURL = 'https://gh-trending-api.herokuapp.com/repositories';

function Repositories() {
    const [repoData, setRepoData] = useState([])
    const [repoDummy, setRepoDummy] = useState([])
    const [selectlang, setSelectlang] = useState([])
    const [isShown, setIsShown] = useState(false);
    let history = useHistory();

    useEffect(() => {
      
        fetch('/repositories')
        .then(result => { setRepoDummy(result); console.log("Roshan", result) })
        .catch(error => { console.log("Roshan", error) });

        //   githubTrends()
        //   .then(result => { console.log(result) })
        //   .catch(error => { console.log(error) })
        
        //axios.get(repoDataURL).then(res => console.log(res)).catch(error => console.log(error));
        // const mydate = axios.get(repoJSONData).then(res => console.log(res)).catch(error => console.log(error));
        //const [ rank, username, repositoryName, url, description, language, languageColor, totalStars, forks, starsSince, since] = repo;
        
        //setRepoDummy(dataaa);
        //console.log(repoDummy);

        const selectLangData = repoJSONData.filter(langSelect => langSelect.language === 'HTML');
        setSelectlang(selectLangData);
        
        const repositories = repoJSONData.map(repo => { return <Row key= {repo.rank}>
                    
                    <Col xs ="12" md lg="9">
                        <h5 className="title"
                        onClick={ (e) => { 
                            e.preventDefault();
                            window.location.href=(repo.url)
                       }} 
                       ><span>{repo.username}</span> / {repo.repositoryName}</h5>
                        <p>{repo.description}</p>
                        
                    </Col>
                    <Col xs ="12" md lg="3" className="repo_right_block">
                        <Button variant="outline-secondary"
                        onClick={ (e) => { 
                            e.preventDefault();
                            window.location.href='https://github.com/login';
                       }} 
                        ><i className ="far fa-star"></i> Star</Button>
                    </Col>
                    <Col xs ="12" md lg="9">
                        <ul className="repo_details">
                            <li style={{color: repo.languageColor}}>{repo.language}</li>
                            <li><Link to=""><i className ="far fa-star"></i> {repo.totalStars}</Link></li>
                            <li><Link to=""><i className ="fas fa-code-branch"></i> {repo.forks}</Link></li>
                            {
                                repo.builtBy.map(builtByItem => <li className = "built_item" key={builtByItem.username} 
                                > 
                                    <img onClick={ (e) => { 
                                         e.preventDefault();
                                         window.location.href=(builtByItem.url);
                                    }} 
                                    className="builtUserIcon" src={builtByItem.avatar} alt={builtByItem.username} />
                                    
                                        {/* <div className={isShown == true ? 'pulse animated' : 'roshan'}>
                                        I'll appear when you hover over the button.
                                        </div> */}
                                    
                                    </li>)
                            }
                        </ul>
                    </Col>
                    <Col xs ="12" md lg="3" className="repo_right_block">
                        <label><i className ="far fa-star"></i> {repo.starsSince} Star Today</label>
                    </Col>
                 
        </Row> }) 
         setRepoData(repositories);
         
    }, [])
    


    return (
        <div className="repo__wrapper"> 
           {repoData}
        </div>
    )
}

export default Repositories
