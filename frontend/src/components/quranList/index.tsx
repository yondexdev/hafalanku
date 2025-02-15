import React from 'react'
import { Button } from '../ui/button'
import {
    Card,
    CardContent,
  } from "@/components/ui/card"

export const QuranList = () => {
  return (
    <div className='mt-20 w-full'>
        <div className='flex border-b-2 text-[#495E57]'>
            <Button className='cursor-pointer text-md' variant={"ghost"}>
                Surah
            </Button>

            <Button className='cursor-pointer text-md' variant={"ghost"}>
                Juz
            </Button>

            <Button className='cursor-pointer text-md' variant={"ghost"}>
                Relevation Order
            </Button>
        </div>

        <div className='grid grid-cols-1 gap-4 overflow-hidden mt-6 md:grid-cols-3 sm:grid-cols-2'>
            <Card className='w-2/2'>
                <CardContent className='pt-6'>
                    <p>Card Content</p>
                </CardContent>
            </Card>
            <Card className='w-2/2'>
                <CardContent className='pt-6'>
                    <p>Card Content</p>
                </CardContent>
            </Card>
            <Card className='w-2/2'>
                <CardContent className='pt-6'>
                    <p>Card Content</p>
                </CardContent>
            </Card>
            <Card className='w-2/2'>
                <CardContent className='pt-6'>
                    <p>Card Content</p>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}
