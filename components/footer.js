import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#313131] h-[310px]'>
        <footer className='container mx-auto'>
            <h4 className='text-lg text-white text-center pt-[71px] pb-6'>Ikuti Kami</h4>
            <div className='flex justify-around w-8/12 border-b border-[#6B7280] pb-7 mx-auto'>
                <span className='flex items-center space-x-2 text-white'>
                    <Image src={'/logo-instagram.svg'} alt='Logo Instagram' width={40} height={40} />
                    <p>tempo.institute</p>
                </span>
                <span className='flex items-center space-x-2 text-white'>
                    <Image src={'/logo-instagram.svg'} alt='Logo Instagram' width={40} height={40} />
                    <p>Tempo Institute</p>
                </span>
                <span className='flex items-center space-x-2 text-white'>
                    <Image src={'/logo-instagram.svg'} alt='Logo Instagram' width={40} height={40} />
                    <p>@tempoinstitute</p>
                </span>
                <span className='flex items-center space-x-2 text-white'>
                    <Image src={'/logo-instagram.svg'} alt='Logo Instagram' width={40} height={40} />
                    <p>0812-8815-1738/Vanny</p>
                </span>
            </div>
            <h5 className='text-white text-center mt-7'>© 2023. All Rights Reserved. Independent Media Accelerators.</h5>
        </footer>
    </div>
  )
}

export default Footer