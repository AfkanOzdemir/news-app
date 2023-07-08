'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
const Navbar = () => {
    const [active, setActive] = useState(false)

    const links = [
        {
            name: 'Genel',
            path: '/swiper/general'
        },
        {
            name: 'Ekonomi',
            path: '/swiper/economy'
        },
        {
            name: 'Sağlık',
            path: '/swiper/health'
        },
        {
            name: 'Teknoloji',
            path: '/swiper/technology'
        },
        {
            name: 'Spor',
            path: '/swiper/sport'
        },
    ]

    return (
        <div className='w-20 h-full flex flex-col items-center justify-center bg-primary relative'>
            <div className={`w-64 md:w-96 h-[100vh] transition-all ease-linear pl-16 border-r-[1px] border-white border-opacity-50
            ${active ? 'left-0' : '-left-[40rem]'} flex flex-col space-y-5 z-10
            items-center justify-center absolute bg-primary text-white font-poppins font-black text-3xl cursor-pointer`}>
                {
                    links.map((link, index) => (
                        <Link key={index} href={link.path}>
                            <motion.div
                                className='p-2'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {link.name}
                            </motion.div>
                        </Link>
                    ))
                }

            </div>
            <div className='w-full h-full flex flex-col items-center justify-between py-5 px-2 z-20'>
                <div>
                    <Link href='/'>
                        <img src="/logowhite.png" alt="logo" className='w-10 h-10 object-contain' />
                    </Link>
                </div>
                <div className={`flex items-center justify-center transition-all ease-linear cursor-pointer ${active ? 'space-x-0' : 'space-x-1'} p-1 w-full h-auto`} onClick={() => setActive(!active)}>
                    <div className={`w-[2px] h-8 bg-white transition-all ease-linear origin-center ${active ? 'rotate-45' : 'rotate-0'}`}></div>
                    <div className={`w-[2px] h-8 bg-white transition-all ease-linear origin-center ${active ? '-rotate-45' : 'rotate-0'}`}></div>
                </div>
                <div className='w-full h-auto flex flex-col items-center justify-center space-y-6'>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-full h-full text-2xl flex items-center justify-center text-white cursor-pointer'><AiFillInstagram /></motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-full h-full text-2xl flex items-center justify-center text-white cursor-pointer'><AiFillFacebook /></motion.div>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-full h-full text-2xl flex items-center justify-center text-white cursor-pointer'><AiFillYoutube /></motion.div>
                </div>
            </div>

        </div>
    )
}

export default Navbar