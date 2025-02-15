import React, { PropsWithChildren } from 'react'

export const ContentLayout = (props: PropsWithChildren) => {
    const { children } = props;
 
    return (
    <div className='w-full max-w-[1100px] mx-auto p-5'>
        {children}
    </div>
  )
}
