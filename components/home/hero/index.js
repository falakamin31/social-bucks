import Link from "next/link";

import Cards from "./cards";

const Hero = props => {
    return (
        <div className="bg-dark-black pt-24 lg:pt-[9.1875rem]">
            <p className="uppercase text-green text-[10px] lg:text-[20px] text-center font-eina font-bold tracking-[2px]">Fund Platform</p>
            <h1 className="mt-3 lg:mt-[2.125rem] capitalize text-[45px] lg:text-[100px] text-white font-eina font-bold text-center leading-10 lg:leading-[110px]">Fund your creative work</h1>
            <p className="text-[10px] lg:text-[15px] text-white text-center mx-auto max-w-[18.1875rem] lg:max-w-[41.3125rem] mt-[1.375rem] leading-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>

            <div className="h-[410px] md:h-[580px] xl:h-[550px] relative overflow-hidden">
            <Cards/>
            </div>

            <div className="pt-[4.125rem] xl:pt-0 flex flex-col items-center justify-center">
                 <Link href='/'>
                <button className='capitalize bg-green px-[3.03125rem] lg:px-[5.53125rem] py-[0.75rem] lg:py-[1.28125rem] rounded-[10px] lg:rounded-[15px] text-[15px] lg:text-lg font-eina font-bold hover:bg-dark-green transition-all ease-in-out duration-200 text-dark-black'>
                    Start My Page
                </button>
                </Link>
                <p className="text-[10px] lg:text-[15px] text-white mx-auto max-w-[18.1875rem] lg:max-w-[41.3125rem] mt-[0.9375rem] lg:mt-[1.125rem] leading-4 font-medium text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
                
            </div>
        </div>
    );
};

export default Hero;
