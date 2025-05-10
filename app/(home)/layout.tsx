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
            <footer className="flex justify-between border-t p-6 text-gray-700">Marketspace, Inc</footer>
        </div>
    )
}

export default Layout