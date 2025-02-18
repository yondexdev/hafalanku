import React, { useState } from 'react'
import { Button } from '../ui/button'
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import { useFetchListChapters } from '@/hooks/useFetchListChapters'

export const QuranList = () => {
    const [ hoverColor, setHoverColor ] = useState<number | null>(null);

    const { data: fetchListChapters, isLoading: loadingListChapters } = useFetchListChapters()



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
            {loadingListChapters && <p>loading</p>}
            {fetchListChapters?.chapters.map((item) => (
                <Card 
                onMouseEnter={() => setHoverColor(item.id)} 
                onMouseLeave={() => setHoverColor(null)} 
                key={item.id} 
                className={`w-2/2 transition-all duration-200 cursor-pointer ${hoverColor === item.id ? 'border-[#A8D5BA]' : ''} `}>
                    <CardContent className='pt-6 flex justify-between items-center'>
                        
                        <div className={`w-10 h-10 rounded-md transition-all duration-200 flex justify-center items-center rotate-45 ${hoverColor === item.id ? 'bg-[#A8D5BA]' : 'bg-[#f3f3f3]'}`}>
                            <p className='-rotate-45'>{item.id}</p>
                        </div>

                        <div className='w-1/2 text-md'>
                            <p>{item.name_simple}</p>
                            <p className={`text-[11px] transition-all duration-200 ${hoverColor === item.id ? 'text-[#A8D5BA]' : 'text-muted-foreground'}`}>{item.translated_name.name}</p>
                        </div>

                        <div className='text-sm flex flex-col items-end'>
                            <p>{item.name_arabic}</p>
                            <p className={`text-[12px] ${hoverColor === item.id ? 'text-[#A8D5BA]' : 'text-muted-foreground'}`}>{item.verses_count} Ayahs</p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  )
}
