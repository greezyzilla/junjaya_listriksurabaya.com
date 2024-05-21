import { cn } from '@/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { type ReactNode, type PropsWithChildren } from 'react'

const Navlink = ({ children, exact, href }: PropsWithChildren<{ exact?: boolean, href: string }>): ReactNode => {
  const router = useRouter()
  const isActive = exact ? router.pathname === href : router.pathname.startsWith(href)

  return (
    <Link href="/" className={cn('font-roboto py-2 px-5', isActive ? 'text-white font-bold' : 'text-[#EDEDED]')}>{children}</Link>
  )
}

export default function GuestLayout ({ children }: PropsWithChildren): ReactNode {
  return (
    <div className='w-screen h-screen flex flex-col relative'>
      <div className='flex w-full absolute top-0 left-0 py-6'>
        <div className='container flex justify-between'>
          <Link href="/" className='flex gap-2 items-center'>
            <img src='/logo.png' className='size-13 object-contain' alt='logo' />
            <p className='font-cabin text-[22px] text-white'>JUN JAYA ELECTRIC</p>
          </Link>
          <div className='flex gap-5 items-center'>
            <Navlink href='/' exact>Beranda</Navlink>
            <Navlink href='/products'>Produk</Navlink>
            <Navlink href='/about'>Tentang Kami</Navlink>
            <Link href='ke wa' className='py-4 px-5 rounded-full bg-[#2E5CFF] text-white font-roboto font-semibold'>Hubungi Kami</Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        {children}
      </div>
      <footer className='flex flex-col bg-[#04003A]'>
        <div className='py-[60px] container flex flex-col gap-6'>
          <div className='flex flex-col gap-5'>
            <Link href="/" className='flex gap-2 items-center'>
              <img src='/logo.png' className='size-[70px] object-contain' alt='logo' />
              <p className='font-cabin text-white font-bold text-[32px]'>JUN JAYA ELECTRIC</p>
            </Link>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-4'>
                <div className='text-[#EDEDED] flex gap-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <p className='max-w-56 font-roboto text-lg'>
                    Jl. Menganti Lidah Kulon
                    No. 133 Surabaya (60213)
                  </p>
                </div>
                <div className='text-[#EDEDED] flex gap-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <p className='max-w-56 font-roboto text-lg'>
                    junjaya.electric@gmail.com
                  </p>
                </div>
                <div className='text-[#EDEDED] flex gap-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <p className='max-w-56 font-roboto text-lg'>
                    (+62)851-7244-6970
                  </p>
                </div>
              </div>
              <div className='flex gap-[194px]'>
                <div className='flex flex-col gap-3'>
                  <p className='text-white font-bold font-roboto'>Company</p>
                  <div className='flex flex-col gap-3'>
                    <p className='text-white/60 font-roboto'>About Us</p>
                    <p className='text-white/60 font-roboto'>Why Choose Us</p>
                    <p className='text-white/60 font-roboto'>Products</p>
                  </div>
                </div>
                <div className='flex flex-col gap-3'>
                  <p className='text-white font-bold font-roboto'>Products</p>
                  <div className='flex flex-col gap-3'>
                    <p className='text-white/60 font-roboto'>Medium Voltage Network</p>
                    <p className='text-white/60 font-roboto'>Low Voltage Network</p>
                  </div>
                </div>
                <div className='flex flex-col gap-3'>
                  <p className='text-white font-bold font-roboto'>Connections</p>
                  <div className='flex flex-col gap-3'>
                    <p className='text-white/60 font-roboto'>Tokopedia</p>
                    <p className='text-white/60 font-roboto'>WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <div className='h-px flex-1 bg-white' />
            <p className='text-white'>© 2024 Jun Jaya Electric</p>
            <div className='h-px flex-1 bg-white' />
          </div>
        </div>
      </footer>
    </div>
  )
}
