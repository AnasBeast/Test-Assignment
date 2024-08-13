import React from 'react'
import Button from './components/button'

export default function Box() {
    const pages = ["Page 1","Page 2","Page 3","Page 4"]
    return (
        <div className='shadow-md w-[370px] h-[326px] border rounded-lg'>
            <div className='text-left p-4'>
                <div className='flex items-center justify-between'>
                    <label className='text-lg py-4 px-2'>All Pages</label>
                    <input type="checkbox" name="" id="" class="focus:ring-2 focus:ring-[#BDBDBD]"/>
                </div>
                <hr />
                <div className='flex flex-col gap-4 py-4'>
                    {pages.map((page)=>(
                        <div className='flex items-center justify-between'>
                            <label className='px-2'>{page}</label>
                            <input type="checkbox" name="" id="" class="focus:ring-2 focus:ring-[#BDBDBD]"/>
                        </div>
                    ))}
                </div>
                <hr />
            </div>
            <Button/>
        </div>
    )
}
