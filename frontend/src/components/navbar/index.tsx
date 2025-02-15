import React from 'react'
import { Button } from '../ui/button'
import { IoPersonOutline} from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"



export const Navbar = () => {
  return (
    <nav className='flex h-[55px] items-center justify-between bg-slate-50 px-4'>
        <h1 className='font-bold text-lg text-[#495E57]'>Hafalanku</h1>

        <div className='flex gap-2 items-center'>
          <h1 className='font-semibold text-[#495E57]'>✨ Ready For Ramadhan?</h1>
          <Button className='cursor-pointer text-[#495E57] bg-[#A8D5BA] hover:bg-[#9dc7ae]' size={"sm"}>
            Get Started!
          </Button>
        </div>

        <div className='flex items-center'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button 
              variant={"ghost"} 
              size={"icon"} 
              className='rounded-full cursor-pointer'>
                <CiBookmark className='!w-5 !h-5' />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Bookmark</p>
            </TooltipContent>
          </Tooltip>  
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button 
              variant={"ghost"} 
              size={"icon"} 
              className='rounded-full cursor-pointer'>
                <IoPersonOutline className='!w-5 !h-5' />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Account</p>
            </TooltipContent>
          </Tooltip>  
        </TooltipProvider>
        </div>
    </nav>
  )
}