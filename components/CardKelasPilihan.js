import Image from 'next/image'
import React from 'react'

const CardKelasPilihan = () => {
  return (
    <div className='overflow-hidden w-full'>
        <Image src={'/social-media.png'} alt='Social media' width={292} height={150} className='rounded-t-lg w-full' />
        <div className='bg-white p-4 rounded-b-lg'>
            <h6 className='w-9/12'>Social Media Strategy for Beginner</h6>
            <div className='flex items-center space-x-2 mt-2'>
                <Image src={'/logo-institute.svg'} alt='logo institute' width={25} height={25} />
                <p className='text-[#868E96] text-xs'>Tempo Institute</p>
            </div>
            <div className='border-b border-[#F0EDED] my-3'></div>
            <p className='text-[#EA1F27] pb-16'>Rp 100.000</p>
        </div>
    </div>
  )
}

export default CardKelasPilihan