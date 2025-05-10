import Link from "next/link"
import { LogIn, User } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

interface navbarItemProps {
    href: string,
    children: React.ReactNode,
    isActive?: boolean
}

interface Props {
    items: navbarItemProps[],
    open: boolean,
    onOpenChange: (open: boolean) => void
}

export const NavbarSidebar = ({
    items,
    open,
    onOpenChange
}: Props) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="p-0 transition-none">
                <SheetHeader className="p-4 border-b">
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {
                        items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => onOpenChange(false)}
                                className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center"
                            >
                                {item.children}
                            </Link>

                        ))
                    }
                    <div className="border-t">
                        <Link
                            href='/sign-in'
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center"
                        >
                            <div className="flex items-center gap-x-1">
                                <LogIn size={'14px'} className="text-xs" /> Login
                            </div>
                        </Link>

                        <Link
                            href='/sign-up'
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center"
                        >
                            <div className="flex items-center gap-x-1">
                                <User size={'14px'} className="text-xs" /> Start selling
                            </div>
                        </Link>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}
