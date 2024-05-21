import { ContactUs, Excellence, Hero, ProductCategories, Statistic } from '@/components'
import { GuestLayout } from '@/layouts'
import { type ReactNode } from 'react'

export default function Home (): ReactNode {
  return (
    <GuestLayout>
      <Hero />
      <Statistic />
      <Excellence />
      <ProductCategories />
      <ContactUs />
    </GuestLayout>
  )
}
