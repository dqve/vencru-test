import React, { Component } from 'react'
import Sidebar from '../SideBar/index.jsx'
import MobileHeader from '../MobileHeader'

export interface Props {
    children: any
}

export default function Layout(props: Props) {
  return (
    <div id='wrapper'>
                <div id='sidebar' className='relative max-w-[280px] hidden md:block'>
                    <Sidebar/>
                </div>
                <div id='main' className='md:ml-72'>
                    <MobileHeader/>
                    {props.children}
                </div>
            </div>
  )
}
