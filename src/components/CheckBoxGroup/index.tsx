import React, { useState } from 'react'


export interface Props {
    className: string
    image: string
    mainText: string
    subText: string
}


export default function CheckBoxGroup(props:Props) {

    const {className, image, mainText, subText} = props

    const [state, setState] = useState(false)

    return (

        <div onClick={() => setState(!state)} className={`${className} ${!state ? 'bg-purple-30 border-purple-300 hover:border-purple-500' : 'bg-white border-grey-300 hover:border-purple-300'} relative w-full rounded-lg border border-solid focus:bg-purple-30 px-4 py-4`}>
            <div className='flex'>
                <div>
                    <img
                        className="w-12 h-8 rounded-md"
                        src={image}
                        alt=""
                    />
                </div>
                <div className="ml-3 xxl:ml-4 mr-5 sm:mr-3 ">
                    <p className={`${!state ? "text-purple" : "text-grey-700"} text-sm font-medium `}>{mainText}</p>
                    <p className={`${!state ? "text-purple-700" : "text-grey-500"} text-sm font-normal mt-1 `}>{subText}</p>
                    <div className='flex'>
                        <a href="#" className={`${!state ? "text-purple-500 hover:text-purple" : "text-grey-500 hover:text-grey-700"} flex text-sm font-normal `}>
                            Set as default
                        </a>
                        <a href="#" className='flex font-normal ml-3 text-purple text-sm hover:font-medium '>
                            Edit
                        </a>
                    </div>
                </div>
                <div className="absolute right-3 top-3 md:right-5 ml-5">
                    <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        checked={!state}
                        className="h-4 w-4 rounded-full border-gray-300 text-purple-700 focus:ring-purple-500"
                    />
                </div>
            </div>
        </div>
    )
}
