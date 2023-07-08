'use client'
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <div className='w-full h-full font-poppins flex '>
      <div className='w-full lg:w-2/3 h-full bg-primary'>
        <div className='w-full lg:w-3/4 h-full flex flex-col items-start justify-center p-5 space-y-2'>
          <p className='text-2xl font-extralight text-white'>
            {
              new Date().toLocaleDateString('tr-TR', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
              })
            }
          </p>
          <h1 className='text-4xl sm:text-6xl md:text-8xl font-black text-white sm:leading-[5.5rem] md:leading-[8.5rem]'>
            Bugünün Haberleri
          </h1>
          <p className='text-white font-light leading-8 !mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Cras pulvinar mattis nunc sed blandit libero volutpat. Nunc sed velit dignissim
            sodales ut eu sem integer. Turpis massa sed elementum tempus egestas sed sed risus pretium. Sit amet
            dictum sit amet justo donec enim diam. Mauris sit amet massa vitae tortor condimentum.
          </p>
          <Link href='/swiper/general'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='w-auto h-auto bg-white text-primary font-bold text-base p-3 rounded-md'>
              Görüntüle
            </motion.div>
          </Link>
        </div>
      </div>
      <div className='w-1/3 h-full hidden lg:block '>
        <img src='/hero.jpg' alt="hero" className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

