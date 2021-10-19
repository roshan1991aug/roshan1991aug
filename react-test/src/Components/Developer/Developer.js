import React, {useState, useEffect} from 'react'
import './Developer.css'

import devJSONData from './data.json';
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import {Container, Row, Col, Button} from 'react-bootstrap'; 

function Developer() {
    const [developerData, setDeveloperData] = useState([]);

    useEffect(() => {
        const developerData = devJSONData.map((data, index) => { return <Row key= {data.rank}>
            <Col xs ="12" md lg="5">
                <h5 className="title" 
                onClick={ (e) => { 
                    e.preventDefault();
                    window.location.href=(data.url);
               }}
               ><span>{index + 1}</span><img src={data.avatar} alt={data.username}/>
                <label className="username" >{data.username}<span>{data.name}</span>
                </label>  </h5> 
            </Col>
            <Col xs ="12" md lg="4" className="popular_wrapper">
                <p><i class="fab fa-hotjar"></i> POPULAR REPO</p> 
                {
                    <div className="popular__repo">
                            <h5 onClick={ (e) => { 
                                         e.preventDefault();
                                         window.location.href=(data.popularRepository.url);
                                    }} 
                                    >{data.popularRepository.repositoryName}</h5>
                                <p>{data.popularRepository.description}</p>
                        </div>
            
                }
            </Col>
            <Col xs ="12" md lg="3" className="repo_right_block">
                <Button variant="outline-secondary"
                        onClick={ (e) => { 
                            e.preventDefault();
                            window.location.href='https://github.com/login';
                       }} 
                        >Follow</Button>
            </Col>
        </Row> });
        setDeveloperData(developerData);
    }, [])
    return (
        <div className="developer__wrapper">
            {developerData}
        </div>
    )
}

export default Developer
