import React from 'react';
import { Link } from 'react-router-dom';

export default function Li({ children, url, title }) {
  return (
    <li className="nav-item d-flex align-items-center px-1 nav-li" onClick={() => window.location.href = url}>
        { children }
        <Link to='#' className="nav-link  text-light ps-1" aria-current="page" href="#">
            { title }
        </Link>
    </li>
  )
}
