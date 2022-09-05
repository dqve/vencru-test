import React from 'react'
import '../Layout/layout.scss'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { ReactComponent as Home } from '../../assets/images/icons/home.svg'
import { ReactComponent as Dashboard } from '../../assets/images/icons/dashboard.svg'
import { ReactComponent as Projects } from '../../assets/images/icons/projects.svg'
import { ReactComponent as Tasks } from '../../assets/images/icons/tasks.svg'
import { ReactComponent as Reporting } from '../../assets/images/icons/reporting.svg'
import { ReactComponent as Users } from '../../assets/images/icons/users.svg'
import { ReactComponent as Settings } from '../../assets/images/icons/settings.svg'
import { ReactComponent as Support } from '../../assets/images/icons/support.svg'
import SearchInput from '../SearchInput'
import ActionCard from '../ActionCard'
import Account from '../AccountCard'

import { useSelector, useDispatch } from 'react-redux'
import { logout, updateData } from '../../redux/features/products/dataSlice'

const Sidebar = () => {

    const users = useSelector((state) => state.userData.user.users)


    return (
        <div className='fixed h-screen bg-white font-inter md:w-[280px] w-full xxs:w-2/3 sm:1/3 border-solid border-r-[1px] overflow-auto h-full scrollbar-hide'>
            <div className='p-6 flex flex-col justify-between h-full'>
                <div>
                    <div className='py-4 pt-2 px-3'>
                        <Logo />
                    </div>

                    <SearchInput users={users} />

                    <div className='mt-4'>
                        <ul className='block list-none cursor-pointer p-2 rounded-md hover:bg-grey hover:p-2'>
                            <li className='text-base text-grey-700 font-medium flex items-center' >
                                <Home />
                                <span className='ml-3'>Home</span>
                            </li>
                        </ul>

                        <ul className='block list-none cursor-pointer p-2 rounded-md hover:bg-grey hover:p-2'>
                            <li className='text-base text-grey-700 font-medium flex items-center justify-between hover:bg-grey'>
                                <div className='flex items-center'>
                                    <Dashboard />
                                    <span className='ml-3 mt-1'>Dashboard</span>
                                </div>

                                <div className='text-sm bg-light-purple rounded-2xl py-0.5 px-2.5 '>
                                    10
                                </div>
                            </li>
                        </ul>

                        <ul className='block list-none cursor-pointer p-2 rounded-md hover:bg-grey hover:p-2'>
                            <li className='text-base text-grey-700 font-medium flex items-center'>
                                <Projects />
                                <span className='ml-3 mt-1'>Projects</span>
                            </li>
                        </ul>

                        <ul className='block list-none cursor-pointer p-2 rounded-md hover:bg-grey hover:p-2'>
                            <li className='text-base text-grey-700 font-medium flex items-center '>
                                <Tasks />
                                <span className='ml-3 mt-1'>Tasks</span>
                            </li>
                        </ul>

                        <ul className='block list-none cursor-pointer p-2 rounded-md hover:bg-grey hover:p-2'>
                            <li className='text-base text-grey-700 font-medium flex items-center hover:bg-grey'>
                                <Reporting />
                                <span className='ml-3 mt-1'>Reporting</span>
                            </li>
                        </ul>

                        <ul className='block list-none cursor-pointer p-2 rounded-md hover:bg-grey hover:p-2'>
                            <li className='text-base text-grey-700 font-medium flex items-center hover:bg-grey'>
                                <Users />
                                <span className='ml-3 mt-1'>Users</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>

                    <div>
                        <ul className='block list-none cursor-pointer p-2 rounded-md hover:bg-grey hover:p-2'>
                            <li className='text-base text-grey-700 font-medium flex items-center'>
                                <Support />
                                <span className='ml-3 mt-1'>Support</span>
                            </li>
                        </ul>

                        <ul className='block list-none cursor-pointer mb-5 bg-grey rounded-md px-3 py-2'>
                            <li className='text-base text-grey-900 font-medium flex items-center'>
                                <Settings />
                                <span className='ml-3 mt-1'>Settings</span>
                            </li>
                        </ul>
                    </div>

                    <ActionCard />

                    <Account />

                </div>
            </div>
        </div>
    )
}

export default Sidebar