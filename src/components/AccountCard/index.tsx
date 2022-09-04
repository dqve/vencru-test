import React from 'react'
import avatar from '../../assets/images/avatar.svg'

export default function index() {
    return (

        // Account Card component

        <div className=' flex border-t border-grey-200 justify-between w-full py-6 mt-4'>
            <div className=' flex justify-between md:w-4/5'>
                <div className='md:shrink-0'>
                <img
                        className="w-10 h-10 rounded-full"
                        src={avatar}
                        alt=""
                      />
                </div>
                <div className=' pl-4 sm:pl-2 flex flex-col justify-between align-start'>
                    <h3 className='text-sm text-grey-900 font-medium'>Olivia Rhye</h3>
                    <p className='text-sm text-grey-500'>olivia@untitledui.com</p>
                </div>
            </div>
            <div  className=' w-1/5 flex justify-center '>
                <input id='logout-button' className='w-9 h-9  cursor-pointer' />
            </div>
        </div>
    )
}
