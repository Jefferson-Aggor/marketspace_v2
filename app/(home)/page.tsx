import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'

const Home = () => {
    return (
        <div>
            <div className="flex flex-col gap-y-4 p-4">
                <div>
                    <Button variant='elevated'>Hello World from home route</Button>
                </div>
                <div>
                    <Input placeholder="I am an input" />
                </div>
                <div>
                    <Progress value={50} />
                </div>


            </div>
        </div>
    )
}

export default Home