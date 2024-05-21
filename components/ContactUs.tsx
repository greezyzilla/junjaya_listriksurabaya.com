import Link from 'next/link'
import React, { type ReactNode } from 'react'

export default function ContactUs (): ReactNode {
  return (
    <div className='py-10 container flex flex-col gap-5 justify-center text-center items-center'>
      <p className='font-signika text-5xl font-bold max-w-4xl leading-[130%]'>Apakah Anda membutuhkan produk berkualitas untuk proyek Anda?</p>
      <Link href='ke wa' className='py-4 px-5 rounded-full bg-[#2E5CFF] text-white font-roboto font-semibold w-fit'>Hubungi Kami</Link>
    </div>
  )
}
