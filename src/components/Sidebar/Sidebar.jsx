import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
      </ul>
    </div>
  )
}
