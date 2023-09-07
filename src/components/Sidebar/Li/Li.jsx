import React from 'react';
import { Link } from 'react-router-dom';

export default function Li({ url, title }) {
  return (
    <li 
        className='d-flex align-items-center ps-4 py-2 w-100 text-start no-outline sidebar-li'
        style={{cursor: 'pointer'}}
        key={ url }
        onClick={ () => window.location.href = `./${url}` }
    >
        <Link className="rounded text-decoration-none text-light fs-6 no-outline">
        { title }
        </Link>
    </li>
  )
}
