"use client"
import { useState } from "react"
import Link from "next/link"
import { Poppins } from "next/font/google"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { NavbarSidebar } from "./navbar-sidebar"
import { MenuIcon } from "lucide-react"


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['700']
})

interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
    return (
        <Button
            asChild
            variant='outline'
            className={cn(
                "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
                isActive && "bg-black text-white hover:bg-black hover:text-white"
            )}
        >
            <Link href={href}>
                {children}
            </Link>

        </Button>
    )
}

const navbarItems = [
    { href: '/about', children: 'About' },
    { href: '/features', children: 'Features' },
    { href: '/pricing', children: 'Pricing' }
]

export const Navbar = () => {
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const actionBtnClass = "border-l border-t-0 border-r-0 px-12 h-full transition-colors text-lg rounded-none"

    return (
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link href='/' className="pl-6 flex items-center">
                <span className={cn("text-5xl font-semibold", poppins.className)}>MarketSpace<span className="text-pink-400">.</span></span>
            </Link>

            <div className="items-center gap-2 hidden lg:flex">
                {
                    navbarItems.map((item) => (
                        <NavbarItem
                            key={item.href}
                            href={item.href}
                            isActive={pathname === item.href}
                        >
                            {item.children}
                        </NavbarItem>
                    ))
                }
            </div>

            <div className="hidden lg:flex items-center">
                <Button
                    asChild
                    variant="secondary"
                    className={cn("hover:bg-pink-400", actionBtnClass)}>
                    <Link href='/sign-in'>Login</Link>
                </Button>
                <Button
                    asChild
                    className={cn("hover:bg-pink-400 hover:text-black", actionBtnClass)}>
                    <Link href='/sign-up'>Start selling</Link>
                </Button>
            </div>

            {/* Side bar */}
            <div className="flex lg:hidden items-center">
                <Button
                    variant='ghost'
                    className="size-12 border-transparent bg-white"
                    onClick={() => setIsSidebarOpen(true)}>
                    <MenuIcon />
                </Button>
            </div>

            <NavbarSidebar
                open={isSidebarOpen}
                onOpenChange={setIsSidebarOpen}
                items={navbarItems}
            />
        </nav>
    )
}