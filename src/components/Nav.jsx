import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link} from "react-router-dom";

function Nav({onSearch}) {
  return (
    <div>
      <nav >
          <Link to='/About'>
              <span>About</span>
          </Link>
          <Link to='/'>
              <span>Cards</span>
          </Link>
          {/*<Link to='/ciudad'>*/}
          {/*    <span>Ciudad</span>*/}
          {/*</Link>*/}
        <SearchBar onSearch={onSearch}/>
      </nav>
    </div>
  )
};

export default Nav;


