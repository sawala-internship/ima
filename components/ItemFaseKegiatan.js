import Link from 'next/link'
import React from 'react'

const ItemFaseKegiatan = ({fase, title,description}) => {
    return (
        <>
            <div className='flex'>
            <p className='font-medium text-xl pt-10 w-1/12'>{fase}</p>
            <div className="border-l-[8px] pt-10 pb-14 border-[#EA1F27] ml-3 space-x-14 w-11/12">
                <div className="relative">
                    <div className="absolute top-0 -left-5 bg-[#EA1F27] h-8 w-8 rounded-full border-4 border-white hover:scale-110"></div>
                    <div className="bg-[#F3F4F6] px-8 py-6 ml-10 rounded-b-[30px] rounded-tr-[30px]">
                        <h4 className="font-bold text-xl mb-3">{title}</h4>
                        <p>{description}</p>
                        <button className='text-sm py-2 px-5 my-3 bg-[#EA1F27] rounded-full text-white'>Baca selengkapnya</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemFaseKegiatan