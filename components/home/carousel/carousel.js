import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Scrollbar } from 'swiper/modules';

import { carouselCards } from '@/constants';
import Image from 'next/image';


export default function App() {

  return (
    <div className='lg:hidden'>
      <Swiper
        scrollbar={{ hide: false }}
        slidesPerView={1.7}
        spaceBetween={25}
        // centeredSlides={true}
        grabCursor
        simulateTouch
        className="!pl-9 !py-7 h-full"
        // modules={[Scrollbar]}
      >
        {carouselCards.map((card) => (
            <SwiperSlide className='bg-red-600 h-full' key={card.id}>
                <Card card={card} />
            </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

const Card = ({card}) => {
    const {title, description, image} = card;
    console.log(title, description, image)
    return (
        <div className="bg-dark-gray h-full rounded-[13px] border-[0.7px] border-white flex flex-col gap-[2.4375rem] lg:gap-[4.3125rem] py-[2.0625rem] lg:py-[3.625rem] px-[2.125rem] lg:px-[2.9375rem]">
        <Image src={image} alt={title} width={20} height={20} className="w-5 h-5 lg:w-[30px] lg:h-[30px] self-end" />
        <div className='text-left'>
        <h2 className="text-white font-bold text-xs lg:text-lg">{title}</h2>
        <p className="font-medium text-[10px] lg:text-[15px] text-white">{description}</p>
        </div>
    </div>
    );
}
