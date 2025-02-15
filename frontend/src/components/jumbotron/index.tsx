import React from 'react'
import { Input } from '../ui/input'
import { IoSearch } from 'react-icons/io5'
import { SURAH } from '@/constant/surah'
import { Button } from '../ui/button'
import { FaPlay } from "react-icons/fa";


export const Jumbotron = () => {
  return (
    <div className='w-full h-[160px] bg-[#A8D5BA] relative flex items-end justify-center overflow-hidden'>

        <div className='w-full flex items-center justify-end flex-col'>
            <div className='w-full max-w-[700px] relative'>
                <IoSearch className='text-[#B2B2B2] w-6 h-6 absolute top-3 left-4' />
                <Input size={"lg"} placeholder='What do you want to read?' className='bg-white pl-14 placeholder:text-lg !text-lg h-[50px] max-w-[700px] rounded-full' />
            </div>
            <div className='flex gap-4 text-[#495E57] font-semibold my-3'>
                {SURAH.map((item, index) => (
                    <h2 className='cursor-pointer transition-opacity duration-200 hover:opacity-50'>{item.surah}</h2>
                    ))}
            </div>
        </div>

        <div className='absolute top-3 right-4'>
          <Button 
          variant={"ghost"}  
          className='rounded-sm cursor-pointer hover:bg-[#94bba4] text-[#495E57] hover:text-[#495E57] '>
            <FaPlay className='!w-4 !h-4' />
            <span>Play Radio</span>
          </Button>
        </div>
    </div>
  )
}
