import React from 'react'

export default function SettingsNav() {
    return (

        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
                className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-700 hover:bg-gray-50 focus:z-20"
            >
                My details
            </button>
            <button
                className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-700 hover:bg-gray-50 focus:z-20"
            >
                Profile
            </button>
            <button
                className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-700 hover:bg-gray-50 focus:z-20"
            >
                Password
            </button>
            <button
                className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-700 hover:bg-gray-50 focus:z-20 md:inline-flex"
            >
                Team
            </button>
            <button
                className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-700 hover:bg-gray-50 focus:z-20 md:inline-flex"
            >
                Plan
            </button>
            <button
                className="relative hidden items-center border border-gray-300 bg-grey px-4 py-2 text-sm font-medium text-grey-700 hover:bg-gray-50 focus:z-20 md:inline-flex"
            >
                Billing
            </button>
            <button
                className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-700 hover:bg-gray-50 focus:z-20"
            >
                Notifications
            </button>
            <button
                className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-700 hover:bg-gray-50 focus:z-20"
            >
                Integrations
            </button>
            <button
                className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-700 hover:bg-gray-50 focus:z-20"
            >
                API
            </button>
        </nav>
    )
}
