import configPromise from '@payload-config'
import { Category } from '@/payload-types'
import { getPayload } from 'payload'

import { Navbar } from "./navbar"
import { SearchFilters } from "./search-filters"
import { CustomCategory } from './types'


interface Props {
    children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
    const payload = await getPayload({
        config: configPromise
    })

    const data = await payload.find({
        collection: 'categories',
        depth: 1,
        pagination: false,
        where: {
            parent: {
                exists: false
            }
        },
        sort: "name"
    })

    const formattedData: CustomCategory[] = data.docs.map((doc) => ({
        ...doc,
        subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
            // Because of "depth: 1", "doc" will always be a type of "Category"
            ...(doc as Category),
            subcategories: undefined
        }))
    }))

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <SearchFilters data={formattedData} />
            <div className="flex-1 bg-[#f4f4f0]">
                {children}
            </div>
            <footer className="border-t p-6 text-gray-700 text-center">
                © {new Date().getFullYear()} Ivy, Inc. All rights reserved.
            </footer>
        </div>
    )
}

export default Layout