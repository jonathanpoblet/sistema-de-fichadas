import React from 'react';
import './pageHeader.css';

export default function PageHeader({ title }) {
  return (
    <div className='page-header'>
        <p className='page-header-title'>{ title }</p>
    </div>
  )
}
