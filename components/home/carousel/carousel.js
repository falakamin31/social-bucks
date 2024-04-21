import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css';

import { carouselCards } from '@/constants';

export default function Carousel() {

  return (
    <div className='relative'>
      <div className='md:hidden'>
        <Swiper
          scrollbar={{ hide: true }}
          slidesPerView={1.7}
          spaceBetween={20}
          grabCursor
          simulateTouch
          className="!pl-9 !pr-9 !py-7 h-full"
          modules={[Scrollbar]}
        >
          {carouselCards.map((card) => (
            <SwiperSlide className='h-full' key={card.id}>
              <Card card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='hidden md:flex gap-4 2xl:gap-[25px] mt-[2.875rem] px-4 relative'>
        {carouselCards.map((card) => <li key={card.id} className='list-none'><Card card={card} /></li>)}
      </div>
       <div className="absolute bottom-[2%] md:-bottom-[30%] xl:-bottom-[32%] left-0 2xl:-left-[8%]">
          <Image src='/images/patterns/pattern-8.svg' alt='pattern' width={50} height={50} className="w-16 h-16 xl:w-28 xl:h-28 blur-[8px]" priority />
          </div> 
    </div>
  );
}

const Card = ({ card }) => {
  const { title, description, image } = card;
  return (
    <div className="md:max-w-[19.1875rem] bg-dark-gray h-[14rem] xl:h-[19rem] rounded-[13px] ring-1 ring-white flex flex-col gap-[2.4375rem] md:gap-[1.5rem] xl:gap-[2.3rem] 2xl:gap-[4.3125rem] py-[2.0625rem] md:py-[1.3rem] px-[0.9375rem] hover:ring-[#72BC0B] transition-all ease-linear hover:cursor-pointer drop-shadow-2xl ">
      <Image src={image} alt={title} width={20} height={20} className="w-5 h-5 xl:w-[30px] xl:h-[30px] self-end" />
      <div className='text-left'>
        <h2 className="text-white font-bold text-xs xl:text-lg">{title}</h2>
        <p className="mt-[6px] 2xl:mt-[1rem] font-medium text-[10px] xl:text-[15px] text-white">{description}</p>
      </div>
    </div>
  );
}
