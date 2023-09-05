import React from 'react'
import { Link } from 'react-router-dom'

export default function DropdownSubmenu({ submenus }) {
  return (
    <>
        {
            submenus.map((submenu => {
                return (
                    <li 
                      className='ps-4 py-2 w-100 text-start no-outline sidebar-li'
                      style={{cursor: 'pointer'}}
                      key={ submenu.url }
                      onClick={ () => {
                        window.location.href = `./${submenu.url}`;

                        const collapse = document.getElementsByClassName('collapse');
                        for(let i = 0; i < collapse.length; i++) {
                          collapse[i].className = 'ms-0 collapse';
                        }
                      }}
                    >
                      <Link className="rounded text-decoration-none text-light fs-6 no-outline">
                        { submenu.title }
                      </Link>
                    </li>
                )
            }))
        }
    </>
  )
}
