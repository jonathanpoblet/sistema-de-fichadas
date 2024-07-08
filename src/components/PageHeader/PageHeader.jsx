import React from 'react';

import './pageHeader.css';

export function PageHeader({ title }) {
  return (
    <article className='d-flex align-items-center  p-3 rounded pageHeader'>
      <h1 className='text-light mb-0 fs-4'>{title}</h1>
    </article>
  );
}
