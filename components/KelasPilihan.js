import React from 'react'
import CardKelasPilihan from './CardKelasPilihan';

const KelasPilihan = () => {
  return (
    <div>
    <div className='bg-[#EA1F27] py-36'>
        <div className='container mx-auto '>
            <h4 className='text-white text-lg'>Kelas dari Tempo Institute</h4>
            <h5 className='text-white text-4xl font-bold pb-5'>Kelas Pilihan</h5>
        <div className='flex space-x-4'>
            <CardKelasPilihan />
            <CardKelasPilihan />
            <CardKelasPilihan />
            <CardKelasPilihan />
        </div>
        </div>
    </div>
    </div>
  )
}

export default KelasPilihan