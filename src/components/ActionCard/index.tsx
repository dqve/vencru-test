import React from 'react'
import {ReactComponent as Image} from '../../assets/images/sideimage.svg'

const ActionBar = () => {
  return (

    // New features component

    <div className='bg-grey rounded-lg px-4 py-5'>
        <p className='text-sm text-grey-900 mb-1'>New features available!</p>
        <p className='text-sm text-grey-500 font-light mb-3'>Check out the new dashboard view. Pages now load faster. </p>

        <Image />

        <div className='flex mt-4'>
            <p className='text-sm text-grey-500'>Dismiss</p>
            <p className='text-sm text-purple ml-4'>What's new?</p>
        </div>
    </div>
  )
}

export default ActionBar