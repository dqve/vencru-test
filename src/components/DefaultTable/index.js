import React, { Children } from 'react'

export default function DefaultTable({ children }) {
    return (

        <div
            className="inline-block w-full shadow-md rounded-lg border border-grey-200 overflow-x-auto"
        >
            <table className="w-full leading-normal border-grey-200">
                {children}
            </table>
        </div>
    )
}
