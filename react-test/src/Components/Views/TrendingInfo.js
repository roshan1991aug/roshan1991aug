import React, { useEffect, useState } from 'react'
import './TrendingInfo.css' 

function TrendingInfo() { 
    const [showDeveloperText, setShowDeveloperText] = useState('')

    useEffect(() => {
        const checkDeveloper = window.location.href.indexOf("developer") > -1;
        setShowDeveloperText(checkDeveloper);
    });
    return (
        <div className="trending__wrapper">
            <h3>Trending</h3>
            {
                showDeveloperText ? 
                <p>These are the developers building the hot tools today.</p>
            :
                <p>See what the GitHub community is most excited about today.</p>
            }
        </div>
    )
}

export default TrendingInfo
