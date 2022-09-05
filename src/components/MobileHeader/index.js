import React, { useState } from 'react'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { ReactComponent as LogoIcon } from '../../assets/images/logo-icon.svg'
import { ReactComponent as Menu } from '../../assets/images/icons/hamburger-menu.svg'
import Sidebar from '../SideBar'

export default function MobileHeader() {

    const [state, setState] = useState(false)

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:hidden">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start items-center lg:w-0 lg:flex-1">

                        <span className="sr-only">Untitled UI</span>
                        <LogoIcon />
                        <span className="px-2.5 text-grey-900 font-medium text-2xl">Untitled UI</span>

                    </div>
                    <div className="-my-2 -mr-2">
                        <button type="button" onClick={()=>setState(!state)} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500" aria-expanded="false">
                            <span className="sr-only">Open menu</span>
                            <Menu />
                        </button>
                    </div>
                </div>
            </div>


            <div className={`relative z-10 ${state?"block":"hidden"} md:hidden ease-in-out duration-300`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 left-0 flex md:w-[280px] w-full xxs:w-2/3 sm:1/3 mr-10">
                            <div className="pointer-events-auto relative w-screen max-w-md">
                                <div className="absolute top-0 xxs:-right-10 ml-18 flex pt-4 pl-12 sm:ml-20 right-0 sm:pl-14  z-20 ">
                                    <button type="button"  onClick={()=>setState(false)}  className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                        <span className="sr-only">Close panel</span>
                                        {/* <!-- Heroicon name: outline/x-mark --> */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="relative flex h-full shadow-xl">
                                    <Sidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
