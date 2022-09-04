import React, { ReactElement } from 'react'
import Sidebar from '../SideBar'
import MobileHeader from '../MobileHeader'

// Prop Type definition interface
export interface Props {
    children: ReactElement
}

export default function Layout(props: Props) {
    return (

        // General application layout declaring the primary look of the UI

        <div id='wrapper' className='bg-grey h-full font-inter'>
            <div id='sidebar' className='relative max-w-[280px] hidden md:block  h-full'>
                <Sidebar />
            </div>
            <div id='main' className='md:ml-72 w-auto h-full'>
                <MobileHeader />
                {props.children}
            </div>
        </div>
    )
}
