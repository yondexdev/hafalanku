import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GOALS } from '@/constant/goals'
import { Button } from '../ui/button'


export const GrowthJourney = () => {
  return (
    <div className='mt-10 w-full rounded-md'>
      <h1 className='text-[#495E57] font-bold text-4xl'>Quran Growth Journey</h1>

      <div className='flex flex-col md:flex-row w-full gap-4 mt-10'>
        {GOALS.map((item, index) => (
          <Card className='md:w-2/4 text-[#495E57]'>
            <CardHeader>
              <CardTitle className='flex flex-col gap-3'><span className='text-5xl'>{item.icon}</span> <span className='text-xl font-bold'>{item.title}</span></CardTitle>
              <CardDescription>{item.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className='cursor-pointer text-[#495E57] bg-[#A8D5BA] hover:bg-[#9dc7ae]'>{item.btnTitle}</Button>
            </CardContent>
          </Card>
        ))}

      </div>
    </div>
  )
}
