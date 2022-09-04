import React from 'react'
import SettingsNav from '../../components/SettingsNav'
import { ReactComponent as Email } from '../../assets/images/icons/email.svg'
import CheckBoxGroup from '../../components/CheckBoxGroup'
import visa from '../../assets/images/icons/visa.svg'
import mastercard from '../../assets/images/icons/mastercard.svg'
import { ReactComponent as Plus } from '../../assets/images/icons/plus.svg'
import { ReactComponent as Download } from '../../assets/images/icons/download.svg'
import { ReactComponent as ArrowDown } from '../../assets/images/icons/arrow-d.svg'
import { ReactComponent as CheckIcon } from '../../assets/images/icons/check-icon.svg'
import DefaultTable from '../../components/DefaultTable'

import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { logout, updateData } from '../../redux/features/products/dataSlice'


export default function Settings() {

    const users = useSelector((state: RootState) => state.userData.user.users)
    const history = useSelector((state: RootState) => state.userData.user.history)
    const dispatch = useDispatch()


    return (

        <div className='w-full overflow-hidden sm:p-8'>

            <div id="settings_header" className='flex flex-col justify-between  sm:min-h-fit sm:h-full pt-8 sm:pt-0 '>
                <div className='px-8 sm:px-0'>
                    <h3 className=' text-grey-900 font-medium text-[1.875rem] leading-[2.375rem] '>Settings</h3>
                    <p className=' text-grey-500 text-base font-normal py-2'>Manage your team and preferences here.</p>
                </div>
                <div className='overflow-auto scrollbar-hide mx-0 w-full'>
                    <SettingsNav />
                </div>
            </div>

            <div className='px-8 pt-8 sm:px-0 xxl:w-4/5'>
                <div id="payment_header" className=' flex flex-col justify-between min-h-fit'>
                    <div className=''>
                        <h3 className=' text-grey-900 font-medium text-lg '>Payment method</h3>
                        <p className=' text-grey-500 text-sm font-normal pt-2'>Update your billing details and address.</p>
                    </div>
                </div>

                <div id="payment_form" className='pt-6 flex flex-col justify-between min-h-fit'>
                    <div className=' border-t border-grey-200 '>
                        <div className="bg-gray-50 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <div>
                                <dt className="text-sm font-medium text-grey-700">Contact email</dt>
                                <dd className="mt-1 text-sm text-grey-500 sm:col-span-2 sm:mt-0">Where should invoices be sent?</dd>
                            </div>
                            <div className='w-full  sm:col-span-2 sm:mt-0'>
                                <div className="flex items-start justify-start pt-5 sm:pt-0">
                                    <input
                                        id="push-email"
                                        name="push-notifications"
                                        type="radio"
                                        className="h-4 w-4 border-grey-200 mt-1 text-purple focus:ring-purple-30  hover:ring-purple hover:border-purple hover:bg-purple-30 checked:bg-purple "
                                    />
                                    <div className="ml-3 block text-sm font-medium text-gray-700">
                                        <dt className="text-sm font-medium text-grey-700">Send to my account email</dt>
                                        <dd className="mt-1 text-sm text-grey-500 sm:col-span-2 sm:mt-0">olivia@untitledui.com</dd>
                                    </div>
                                </div>

                                <div className="flex items-start justify-start pt-4 sm:pt-4">
                                    <input
                                        id="push-email"
                                        name="push-notifications"
                                        type="radio"
                                        className="h-4 w-4 border-grey-200 mt-1 text-purple focus:ring-purple-30  hover:ring-purple hover:border-purple hover:bg-purple-30 checked:bg-purple "
                                    />
                                    <div className="ml-3 block text-sm  w-full font-medium text-gray-700">
                                        <p className="text-sm font-medium text-grey-700">Send to an alternative email</p>
                                        <div className='relative pt-3'>
                                            <span className=" absolute text-gray-500 sm:text-sm inline-flex h-full justify-center align-center m-[0.55rem]"><Email /></span>
                                            <input className="inline-flex w-full sm:w-2/3 2xl:w-3/5 justify-center rounded-lg border border-solid border-gray-300 bg-white px-4 py-2 pl-10 font-medium text-gray-700 focus:rounded-lg focus:shadow-purple-action focus:outline-none focus:ring-4 focus:ring-purple-30 focus:ring-offset-[0.5px] focus:ring-offset-purple-300" id="menu-button" placeholder='Email' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className=' border-t border-grey-200 '>
                        <div className="bg-gray-50 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <div>
                                <dt className="text-sm font-medium text-grey-700">Card details</dt>
                                <dd className="mt-1 text-sm text-grey-500 sm:col-span-2 sm:mt-0">Select default payment method.</dd>
                            </div>
                            <div className='w-full  sm:col-span-2 sm:mt-0'>
                                <CheckBoxGroup
                                    className={""}
                                    image={visa}
                                    mainText={"Visa ending in 1234"}
                                    subText={"Expiry 06/2024"}
                                />

                                <CheckBoxGroup
                                    className={"mt-3"}
                                    image={mastercard}
                                    mainText={"Mastercard ending in 1234"}
                                    subText={"Expiry 06/2024"}
                                />
                                <a href="#" className={"text-grey-500 hover:text-grey-700 flex text-sm font-normal mt-4"}>
                                    <Plus /> <span className="ml-1">  Add new payment method</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 pt-8 sm:px-0 xxl:w-4/5'>
                <div id="table_header" className=' flex flex-col justify-between min-h-fit'>
                    <div className='w-full flex justify-between xxs:flex-row flex-col'>
                        <h3 className=' text-grey-900 font-medium text-lg '>Billing history</h3>
                        <button
                            className="flex justify-between max-w-max items-center rounded-lg border border-solid border-gray-300 bg-white px-4 py-2 mt-2 xs:mt-0 font-medium text-gray-700 focus:rounded-lg focus:shadow-purple-action focus:outline-none focus:ring-4 focus:ring-purple-30 focus:ring-offset-[0.5px] focus:ring-offset-purple-300"
                        >
                            <span><Download /></span>
                            <span className="ml-2">Download all</span>
                        </button>
                    </div>
                </div>

                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <DefaultTable>
                        <>
                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b border-grey-200 bg-grey text-left text-xs text-center font-semibold text-grey-500 tracking-wider"
                                    >
                                        <div className="flex">
                                            <div className="flex-shrink-0 h-4 w-4">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="h-4 w-4 mr-2 rounded hover:border-purple-500 hover:bg-purple-30 border-gray-300 text-purple-700 focus:ring-purple-500 checked:accent-purple-500 focus:accent-purple-500 checked:bg-purple-700 focus:border-purple-500 checked:border-purple-700
                                    focus:bg-purple-300 "
                                                />
                                            </div>
                                            <div className="ml-3 flex">
                                                <span className="">Invoice</span><ArrowDown />
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b border-grey-200 bg-grey text-left text-xs text-center font-semibold text-grey-500 tracking-wider"
                                    >
                                        Amount
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b border-grey-200 bg-grey text-left text-xs text-center font-semibold text-grey-500 tracking-wider"
                                    >
                                        Date
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b border-grey-200 bg-grey text-left text-xs text-center font-semibold text-grey-500 tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        className="px-2 py-3  min-w-max border-b border-grey-200 bg-grey text-left text-xs font-semibold text-grey-500 tracking-wider"
                                    >
                                        Users on plan
                                    </th>
                                    <th
                                        className="pr-5 pl-1 py-5 border-b border-grey-200 text-center bg-grey"
                                    ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {history?.length > 0 ?
                                    history.map((each, key) =>

                                        <tr>
                                            <td className="px-5 py-5 border-b  border-gray-200 bg-white hover:bg-gray-50 text-sm">
                                                <div className="flex">
                                                    <div className="flex-shrink-0 h-4 w-4">
                                                        <input
                                                            id="comments"
                                                            name="comments"
                                                            type="checkbox"
                                                            className="h-4 w-4 mr-2 rounded hover:border-purple-500 hover:bg-purple-30 border-gray-300 text-purple-700 focus:ring-purple-500 checked:accent-purple-500 focus:accent-purple-500  checked:bg-purple-700 focus:border-purple-500 checked:border-purple-700"
                                                        />
                                                    </div>
                                                    <div className="ml-3 w-max">
                                                        <p className="text-grey-900 font-medium whitespace-no-wrap">
                                                            {each.invoice}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-2 py-5 border-b   border-gray-200 bg-white text-center hover:bg-gray-50 text-sm ">
                                                <p className="  min-w-max text-grey-500 whitespace-no-wrap">{each.amount}</p>
                                            </td>
                                            <td className="px-2 py-5 border-b  border-gray-200 bg-white  text-center hover:bg-gray-50 text-sm">
                                                <p className="  min-w-max text-grey-500 whitespace-no-wrap">{each.date}</p>
                                            </td>
                                            <td className="px-2 py-5 border-b  border-gray-200 bg-white hover:bg-gray-50 text-sm flex items-center justify-center ">
                                                <div
                                                    className={` w-max relative flex items-center justify-center inline-block px-3 py-1 font-semibold ${each.status !== "Paid" ? "text-rose-700 bg-rose-200/50" : "text-green-700 bg-green-200/50"} leading-tight rounded-full`}
                                                >
                                                    {each.status == "Paid" ? <CheckIcon /> : null}
                                                    <span className="relative pl-1"> {each.status == "Paid" ? "Paid" : "Un-Paid"} </span>
                                                </div>
                                            </td>
                                            <td className="px-2 py-5 min-w-max border-b text-center border-gray-200 bg-white hover:bg-gray-50 text-sm ">
                                                <div className="flex -space-x-1  min-w-max overflow-hidden">
                                                    {each.users && each.users.length > 0 ?
                                                        each.users.filter((each: string, key: Number) => { if (key < 5) return each }).map((each: string, key: any) =>
                                                            <img key={key}
                                                                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                                                src={each}
                                                                alt="Invoice users"
                                                            />
                                                        )
                                                        : null
                                                    }
                                                    {each.users && each.users.length > 5 ?
                                                        <div className='rounded-full w-6 h-6 bg-grey ring-2 ring-white inline-block flex items-center justify-center'>
                                                            <span className='text-grey-600 text-sm font-semibold text-center'>+{each.users.length - 5}</span>
                                                        </div>
                                                        : null
                                                    }
                                                </div>
                                            </td>
                                            <td
                                                className="pr-5 pl-1 py-5 border-b  border-gray-200 bg-white hover:bg-gray-50 text-sm text-right"
                                            >
                                                <button
                                                    type="button"
                                                    className="inline-block text-gray-500 hover:text-gray-700 opacity-50"
                                                >
                                                    <span><Download /></span>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                    :
                                    <tr  className="col-span-full row-span-full">
                                        <td colSpan={6}
                                            className="col-span-full pr-5 pl-1 py-5 bg-white hover:bg-gray-50 text-grey-300 text-sm text-center"
                                        >
                                            No Result found
                                        </td>
                                    </tr>

                                }
                            </tbody>
                        </>
                    </DefaultTable>
                </div>

            </div>

        </div>
    )
}
