import Link from 'next/link'
import { type ReactNode } from 'react'

export default function Hero (): ReactNode {
  return (
    <div className='h-[840px] pt-[100px] flex flex-col' style={{ backgroundImage: 'url(/hero-bg.png)', backgroundSize: 'cover' }}>
      <div className='flex flex-col container h-full gap-8 pt-[100px]'>
        <p className='text-balance text-white font-signika font-bold text-[64px] leading-[85px]'>
          Percayakan Kebutuhan
          <br />
          <span className='text-[#2E5CFF]'>
            Jaringan Listrik&nbsp;
          </span>
          Proyek
          <br />
          Anda pada&nbsp;
          <span className='text-[#2E5CFF]'>
            Jun Jaya
          </span>
        </p>
        <p className='text-[#C2C2C2] text-xl font-roboto leading-9'>
          Kami JJ Electric sebagai Supplier Jaringan Listrik akan memberikan
          <br />
          dukungan penuh untuk proyek Anda dengan menyediakan produk
          <br />
          berkualitas tinggi standart PLN. Kami telah berpengalaman di bidang
          <br />
          Jaringan Listrik TR dan TM sejak Tahun 1989.
        </p>
        <div className='flex gap-4'>
          <Link href='/' className='ring-2 text-white font-roboto font-semibold py-4 px-5 rounded-full ring-white'>Produk Tersedia</Link>
          <Link href='ke wa' className='py-4 px-5 rounded-full bg-[#2E5CFF] text-white font-roboto font-semibold'>Hubungi Kami</Link>
        </div>
      </div>
    </div>
  )
}
