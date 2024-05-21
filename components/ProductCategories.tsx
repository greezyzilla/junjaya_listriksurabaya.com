import React, { type ReactNode } from 'react'

export default function ProductCategories (): ReactNode {
  return (
    <div className='py-10 container flex flex-col gap-10'>
      <div className='flex flex-col gap-5 justify-center text-center'>
        <p className='font-signika text-5xl font-bold'>Kategori Produk</p>
        <p className='text-[#757575] font-roboto text-lg'>
          Pilih kategori produk sesuai dengan kebutuhan produk yang Anda butuhkan
        </p>
      </div>
      <div className='flex gap-12'>
        <div className='flex flex-1 gap-6 px-6 items-center'>
          <img src="/categories-moderate.png" alt="Jaringan Tegangan Menengah" className='object-contain size-[229px]' />
          <p className='font-roboto font-bold text-[28px] max-w-72'>Jaringan Tegangan Menengah</p>
        </div>
        <div className='flex flex-1 gap-6 px-6 items-center'>
          <img src="/categories-low.png" alt="Jaringan Tegangan Rendah" className='object-contain size-[229px]' />
          <p className='font-roboto font-bold text-[28px] max-w-72'>Jaringan Tegangan Rendah</p>
        </div>
      </div>
    </div>
  )
}
