import React, { useState } from 'react'
import avatar from '../../assets/images/icons/search.svg'
import { ReactComponent as Search } from '../../assets/images/icons/search.svg'
import { ReactComponent as Tick } from '../../assets/images/icons/tick.svg'

const SearchBar = ({ users }) => {

  const [state, setState] = useState(false)


  return (
    <div className="relative inline-block text-left w-full">
      <div className='relative'>
        <span className=" absolute text-gray-500 sm:text-sm inline-flex h-full justify-center align-center m-[0.65rem]"><Search /></span>
        <input onFocus={() => setState(!state)} onBlur={() => setState(!state)} className="inline-flex w-full justify-center rounded-lg border border-solid border-gray-300 bg-white px-4 py-2 pl-10 font-medium text-gray-700 focus:rounded-lg focus:shadow-purple-action focus:outline-none focus:ring-4 focus:ring-purple-30 focus:ring-offset-[0.5px] focus:ring-offset-purple-300" id="menu-button" ariaExpanded="true" ariaHaspopup="true" placeholder='Search' />
      </div>


      <div className={` ${state ? "block" : "hidden"} absolute  mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" ariaOrientation="vertical" ariaLabelledby="menu-button" tabIndex="-1">
        <div className="py-1" role="none">
          {users ? users.map((each, key) =>
            <a key={key} href="#" className="text-gray-700 block px-4 py-2 hover:bg-grey hover:py-2 hover:px-4text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
              <div className="flex items-center">
                <span className="font-normal ml-3 block truncate">{each.name}</span>
                {each.active ?
                  <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                    <Tick />
                  </span>
                  : null
                }
              </div>
            </a>
          )
            :
            <a href="#" className="text-gray-700 block px-4 py-2 hover:bg-grey hover:py-2 hover:px-4text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
              <div className="flex items-center justify-center">
                <span className="font-normal ml-3 block truncate">No results found</span>
              </div>
            </a>
          }
        </div>
      </div>
    </div>
  )
}

export default SearchBar