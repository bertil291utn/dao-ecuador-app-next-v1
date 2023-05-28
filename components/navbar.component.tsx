'use client';

import { INavbarItem } from 'interfaces/navbar';
import Link from 'next/link';
import { useState } from 'react';

interface IProps {
  navbarItems: Array<INavbarItem>
}

export default function Navbar({ navbarItems }: IProps) {
  const [_navbarItems, setNavbarItems] = useState(navbarItems);

  const handleClick = (id: number) => () => {
    setNavbarItems((prev) => {
      const _prev = [...prev];

      return _prev.map(elem => ({ ...elem, active: false })).map(elem =>
        elem.id == id ? ({ ...elem, active: !elem.active }) : elem
      )

    })

  }

  return (

    <div>
      <nav className="bg-white dark:bg-gray-800  ">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a className="flex-shrink-0" href="/">
                <img className="w-8 h-12" src="https://store.eth-tricolor.org/wp-content/uploads/2023/04/eth-ec-1.png" alt="Workflow" />
              </a>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  {_navbarItems.map((elem, index) => (
                    <Link
                      key={`tab-${index}`}
                      href={`/${elem.path}`}
                      className={`${elem.active ? 'text-white' : 'text-gray-500'}  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      <span className='capitalize'
                        onClick={handleClick(elem.id)}
                      >
                        {elem.title}
                      </span>
                    </Link>))}
                </div>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6">
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>


              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {_navbarItems.map((elem, index) => (
              <Link
                key={`tab-${index}`}
                href={`/${elem.path}`}
                className={`${elem.active ? 'text-white' : 'text-gray-500'} text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
              >
                {<span className='capitalize'>
                  {elem.title}
                </span>}
              </Link>))}
          </div>
        </div>
      </nav>
    </div>

  )
}
