import React, {FC, PropsWithChildren } from 'react'

const page: FC<PropsWithChildren> = ({children}) => {
  return (
    <main className='container mx auto text-white flex flex-col gap-2'>
        {children}
    </main>
  )
}

export default page
