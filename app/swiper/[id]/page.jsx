'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion'
import Link from 'next/link'

const NewsSwiper = ({ params }) => {
    const [news, setNews] = useState([])
    console.log(params.id);
    useEffect(() => {
        const getNews = async () => {
            try {
                const response = await axios.get('https://api.collectapi.com/news/getNews', {
                    params: {
                        country: 'tr',
                        tag: params.id,
                    },
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `${'apikey ' + process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
                    }
                });
                setNews(response.data.result);
                console.log(response.data.result);
            } catch (error) {
                console.log(error);
            }
        };

        getNews();
    }, [params]);
    if (!news) return <div>Loading...</div>
    else {
        return (
            <div className='w-full h-full font-poppins flex flex-col md:flex-row'>
                <div className='w-full md:w-[450px] h-auto md:h-full flex items-start justify-center flex-col p-5 space-y-5 '>
                    <h2 className='text-2xl font-extrabold'>
                        {params.id === 'general' ? 'Genel' :
                            params.id === 'economy' ? 'Ekonomi' :
                                params.id === 'health' ? 'Sağlık' :
                                    params.id === 'technology' ? 'Teknoloji' :
                                        params.id === 'sport' ? 'Spor' : ''}
                    </h2>
                    <p className='text-sm md:text-base'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, diam quis aliquam ultricies, nunc nisl ultrices
                        nunc, quis ultrices nisl nisl nec nisl. Sed euismod, diam quis
                        aliquam ultricies, nunc nisl ultrices nunc, quis ultrices nisl
                        nisl nec nisl.
                    </p>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            direction: 'vertical',
                        },
                        1080: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1500: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper w-full h-full">
                    {news.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Link href={`${item.url}`} target='_blank'>
                                <motion.div className='w-full h-full relative cursor-pointer space-y-2 md:space-y-5 p-7 transition-all ease-linear hover:bg-[#FFFAF0]'>
                                    <div className='w-full h-5 md:h-20 flex items-center justify-start'>
                                        <p className='text-3xl md:text-5xl opacity-10 text-black font-extrabold'>
                                            {index + 1}
                                        </p>
                                    </div>
                                    <div className='w-full h-5 md:h-20 flex items-center justify-start'>
                                        <p className='text-sm md:text-base'>
                                            {new Date().toLocaleDateString('tr-TR', {
                                                weekday: 'long',
                                                month: 'long',
                                                year: 'numeric',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                    <div className='w-full h-56 md:h-72'>
                                        <img src={item.image} alt="news" className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-full h-full bg-opacity-50 flex flex-col items-start justify-start space-y-2 md:space-y-5'>
                                        <div className='w-full h-auto text-left text-[#353535] font-poppins font-bold text-base md:text-2xl line-clamp-2'>{item.name}</div>
                                        <div className='w-full h-auto text-left text-[#353535] font-poppins font-normal text-sm md:text-lg line-clamp-4'>{item.description}</div>
                                        <Link href={`${item.url}`} target='_blank'>
                                            <div className='w-full h-auto text-left text-[#353535] font-poppins font-bold text-base'>Devamını Oku</div>
                                        </Link>
                                    </div>
                                </motion.div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )
    }
}

export default NewsSwiper