import React, { Children, ReactElement } from 'react'

export interface Props {
    children: ReactElement
}

export default function DefaultTable(props: Props) {

    const { children } = props

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
