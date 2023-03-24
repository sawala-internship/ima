import React from 'react'
import ItemFaseKegiatan from './ItemFaseKegiatan'
import { data } from './../pages/api/data';

const FaseKegiatan = () => {
  return (
    <div className='container mx-auto py-36'>
        <h4 className='text-4xl font-bold text-center pt-24 pb-12'>Fase Kegiatan</h4>
            {data.map((item,index)=> (
                <ItemFaseKegiatan key={index} fase={item.fase} title={item.title} description={item.description} />
            ))}
    </div>
  )
}

export default FaseKegiatan