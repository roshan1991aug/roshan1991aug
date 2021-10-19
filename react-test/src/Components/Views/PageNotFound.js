import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import './PageNotFound.css';

function PageNotFound() {
    return (
        <div className="pagenotfound">
            <h1>PageNotFound</h1>
            <Button variant="danger"><Link to="/">Redireact to Home Page</Link></Button>
        </div>
    )
}

export default PageNotFound
