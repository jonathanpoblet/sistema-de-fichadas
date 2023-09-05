import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import DropdownSubmenu from '../DropdownSubmenu/DropdownSubmenu';

export default function Dropdown({ title, collapse, submenus }) {
  return (
    <li className="no-outline">
      <button className="p-2 ps-1 align-items-center collapsed bg-transparent w-100 text-start text-light no-outline" data-bs-toggle="collapse" data-bs-target={`#${ collapse }`} aria-expanded="false" style={{border: '0px'}}>
        <AiFillCaretRight  className='text-light'/> { title }
      </button>
      <div className="collapse ms-0" id={ collapse }> 
        <ul className="btn-toggle-nav list-unstyled fw-normal small">
          <DropdownSubmenu submenus={ submenus }/>
        </ul>
      </div>
    </li>
  )
}
