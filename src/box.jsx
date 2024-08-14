import React from 'react'
import Button from './components/button'

export default function Box() {
    const pages = ["Page 1","Page 2","Page 3","Page 4"]
    return (
        <div className='shadow-[0_8px_15px_0px_rgba(20,20,20,0.12)] w-[410px] border rounded-lg text-[16px] font-light'>
            <div className='text-left p-4'>
                <div className='flex items-center justify-between'>
                    <label className='py-4 px-2'>All Pages</label>
                    <input type="checkbox" name="" id="" class="active:ring-1 active:ring-[#BDBDBD]"/>
                </div>
                <hr />
                <div className='flex flex-col gap-5 py-5'>
                    {pages.map((page)=>(
                        <div className='flex items-center justify-between'>
                            <label className='px-2'>{page}</label>
                            <input type="checkbox" name="" id="" class="active:ring-1 active:ring-[#BDBDBD]"/>
                        </div>
                    ))}
                </div>
                <hr />
            </div>
            <Button/>
        </div>
    )
}
