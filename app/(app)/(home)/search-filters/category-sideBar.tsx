import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

import { CustomCategory } from "../types"
import { useState } from "react"
import { ChevronLeft, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useRouter } from "next/navigation"

interface Props {
    open: boolean,
    openChange: (open: boolean) => void
    data: CustomCategory[]
}

export const CategorySidebar = ({ open, data, openChange }: Props) => {
    const router = useRouter()
    const [parentCategories, setParentCategories] = useState<CustomCategory[] | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<CustomCategory | null>(null)

    const currrentCategories = parentCategories ?? data ?? []

    const handleOpenChange = (open: boolean) => {
        setSelectedCategory(null)
        setParentCategories(null)
        openChange(open)
    }

    const handleCategoryClick = (category: CustomCategory) => {
        if (category.subcategories && category.subcategories.length > 0) {
            setParentCategories(category.subcategories as CustomCategory[])
            setSelectedCategory(category)
        } else {
            if (parentCategories && selectedCategory) {
                router.push(`/${selectedCategory.slug}/${category.slug}`)
            } else {
                if (category.slug == 'all') {
                    router.push('/')
                } else {
                    router.push(`/${category.slug}`)
                }
            }

            handleOpenChange(false)
        }
    }

    const handleBackClick = () => {
        if (parentCategories) {
            setParentCategories(null)
            setSelectedCategory(null)
        }
    }

    const backgroundColor = selectedCategory?.color || 'white'

    return (
        <Sheet open={open} onOpenChange={handleOpenChange}>
            <SheetContent
                side="left"
                className="p-0 transition-none"
                style={{ backgroundColor }}
            >
                <SheetHeader className="p-4 border-b">
                    <SheetTitle>Categories</SheetTitle>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {parentCategories && (
                        <button
                            onClick={handleBackClick}
                            className="flex w-full text-left p-4 hover:bg-black hover:text-white items-center text-base font-medium"
                        >
                            <ChevronLeftIcon className="size-4 mr-2" />
                            Back
                        </button>
                    )}

                    {currrentCategories.map((category) => (
                        <button
                            key={category.slug}
                            className="flex w-full text-left p-4 hover:bg-black hover:text-white
                            items-center justify-between text-base font-medium cursor-pointer"
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category.name}
                            {category.subcategories && category.subcategories.length > 0 && (
                                <ChevronRightIcon className="size-4 ml-2" />
                            )}
                        </button>
                    ))}
                </ScrollArea>


            </SheetContent>
        </Sheet>

    )
}