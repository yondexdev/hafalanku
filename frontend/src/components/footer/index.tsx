import React from 'react'

export const Footer = () => {
  return (
    <div className='mt-16 border-t-2 pt-4 pb-20 flex justify-between items-end'>
      <div className='w-xs'>
        <h1 className='font-bold text-3xl text-[#495E57]'>Hafalanku.</h1>
        <p className='font-bold text-[#495E57] mt-3'>Read, study, and learn The Noble Quran.</p>
        <p className='text-muted-foreground'>Hafalanku is a Sadaqah Jariyah. We hope to make it easy for everyone to read, study, and learn The Noble Quran. The Noble Quran has many names including Al-Quran Al-Kareem, Al-Ketab, Al-Furqan, Al-Maw'itha, Al-Thikr, and Al-Noor.</p>
      </div>

      <div>
        <p className='text-muted-foreground text-[12px]'>© 2025 Hafalanku All Rights Reserved</p>
      </div>
    </div>
  )
}
