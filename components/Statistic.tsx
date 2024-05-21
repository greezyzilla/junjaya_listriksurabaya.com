import React, { type ReactNode } from 'react'

const statistics = [
  {
    label: 'Clients',
    value: '1K+'
  },
  {
    label: 'Projects',
    value: '10K+'
  },
  {
    label: 'Founded',
    value: '1989'
  },
  {
    label: 'City',
    value: '50+'
  }
]

export default function Statistic (): ReactNode {
  return (
    <div className='py-4 container flex justify-around'>
      {
        statistics.map((statistic, index) => (
          <div className='flex flex-col gap-3 py-7 px-5' key={statistic.label + '-' + index}>
            <p className='text-5xl font-poppins font-bold'>{statistic.value}</p>
            <p className='font-roboto text-2xl text-[#9E9E9E]'>{statistic.label}</p>
          </div>
        ))
      }
    </div>
  )
}
