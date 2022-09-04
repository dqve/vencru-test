import React, { Children, ReactElement } from 'react'

// Prop Type definition interface

export interface Props {
    children: ReactElement
}

export default function DefaultTable(props: Props) {

    // destructuring props
    const { children } = props

    return (

        // A template for building a table

        <div
            className="inline-block w-full shadow-md rounded-lg border border-grey-200 overflow-x-auto"
        >
            <table className="w-full leading-normal border-grey-200">
                {children}
            </table>
        </div>
    )
}
