import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './Header.css';
 

function Header() {

    const data = [
        { value: '1', label: 'TypeScript' },
        { value: '2', label: 'HTML' },
        { value: '3', label: 'JavaScript' },
        { value: '4', label: 'python' },  
        { value: '5', label: 'CSS' },  
        { value: '6', label: 'Microsoft' },
        { value: '7', label: 'Go' },
        { value: '8', label: 'Java' },
        { value: '9', label: 'TeX' },
        { value: '10', label: 'Vue' },
      ];

      const [text, setText] = React.useState('');

      const onChange = (event) => {
        setText(event.target.value); 
      }

    return (
        <div className="nav__menu">
            <nav>
                <ul>
                    <li> <NavLink className="menu__item active" exact to="/">Repositories</NavLink> </li>
                    <li> <NavLink className="menu__item" exact to="/developer">Developer</NavLink> </li>
                </ul>
                <ul>
                    <li> 
                        {/* <div className="filter_wrapper">
                            <input type="search" list="list" autoComplete="off" placeholder="Language Select" value={text} onChange={onChange} />
                            <datalist id="list">
                            { data.map(data => <option key={data.value} value={data.label} /> )}
                            </datalist>
                        </div>   */}
                    </li> 
                </ul>
            </nav>
        </div>
    )
}

export default Header
