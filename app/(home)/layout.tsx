import { Navbar } from "./navbar"

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 bg-[#f4f4f0]">
                {children}
            </div>
            <footer className="border-t p-6 text-gray-700 text-center">
                © {new Date().getFullYear()} Marketspace, Inc. All rights reserved.
            </footer>
        </div>
    )
}

export default Layout