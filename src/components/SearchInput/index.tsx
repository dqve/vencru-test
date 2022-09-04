import React, { useState } from 'react'
import avatar from '../../assets/images/icons/search.svg'
import { ReactComponent as Search } from '../../assets/images/icons/search.svg'
import { ReactComponent as Tick } from '../../assets/images/icons/tick.svg'

import type { RootState } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { updateData, updateActiveUser } from '../../redux/features/products/dataSlice'


export interface Props {
  users: any[],
  activeUser: string
}

const SearchBar = (props: Props) => {

  const dispatch = useDispatch()

  const { users, activeUser } = props

  const [state, setState] = useState(false)

  const [value, setValue] = useState("")

  const changeValue = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <div className="relative inline-block text-left w-full">
      <div className='relative'>
        <span className=" absolute text-gray-500 sm:text-sm inline-flex h-full justify-center align-center m-[0.65rem]"><Search /></span>
        <input value={value} onChange={changeValue} onFocus={() => setState(!state)} onBlur={() => setState(!state)} className="inline-flex w-full justify-center rounded-lg border border-solid border-gray-300 bg-white px-4 py-2 pl-10 font-medium text-gray-700 focus:rounded-lg focus:shadow-purple-action focus:outline-none focus:ring-4 focus:ring-purple-30 focus:ring-offset-[0.5px] focus:ring-offset-purple-300" id="menu-button" placeholder='Search' />
      </div>


      <div className={` ${state ? "block" : "hidden"} absolute  mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" tabIndex={-1}>
        <div className="py-1" role="none">
          {users ? users.filter((each)=>each.name.includes(value)).map((each, key) =>
            <span onClick={() => dispatch(updateActiveUser(each.name))} key={key} className="text-gray-700 block px-4 py-2 hover:bg-grey hover:py-2 hover:px-4text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">
              <div className="flex items-center relative">
                <span className="font-normal ml-3 block truncate">{each.name}</span>
                {each.active ?
                  <span className="h-5 w-5 inset-y-0 absolute right-0">
                    <Tick />
                  </span>
                  : null
                }
              </div>
            </span>
          )
            :
            <a href="#" className="text-gray-700 block px-4 py-2 hover:bg-grey hover:py-2 hover:px-4text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">
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