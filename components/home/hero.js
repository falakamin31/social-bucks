import Image from "next/image";

const Hero = props => {
    return (
        <div className="bg-dark-black pt-24 pb-[4.625rem] lg:pt-[9.1875rem] lg:pb-[11.8125rem]">
            <p className="uppercase text-green text-[10px] lg:text-[20px] text-center font-eina font-bold">Fund Platform</p>
            <h1 className="mt-3 lg:mt-[2.125rem] capitalize text-[45px] lg:text-[100px] text-white font-eina font-bold text-center leading-10 lg:leading-snug">Fund your creative work</h1>
            <p className="text-[10px] lg:text-[15px] text-white text-center mx-auto max-w-[18.1875rem] lg:max-w-[41.3125rem] mt-[1.375rem] leading-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
            <div className="h-[400px] relative overflow-hidden">

                {/* Card 1  */}
                <div className="bg-white pt-[1.2rem] lg:pt-[2.6875rem] max-w-[10.1875rem] md:max-w-[20.25rem] rounded-xl flex flex-col gap-2 lg:gap-7 drop-shadow-2xl absolute left-[1%] -rotate-11 top-[18%] pb-3 z-[10]">
                    <div className="flex justify-center">
                    <Image src='/images/1.png' alt='profile picture' width={100} height={100} className="w-[60px] h-[60px] lg:w-[122px] lg:h-[122px] object-contain" priority/>
                    </div>
                    <p className="font-bold lg:font-medium text-[8px] lg:text-[15px] text-center px-[1.3125rem] lg:px-[2.125rem]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor</p>
                    <div className="flex justify-center items-center gap-1">
                        <Image src='/images/heart-icon.svg' alt="heart icon" width={20} height={20} className="w-[15px] h-[15px] lg:w-6 lg:h-6"/>
                        <p className="text-[8px] lg:text-sm font-medium">321 supporters</p>
                    </div>
                </div>

                {/* Card 2 */}  
                 <div className="bg-white pt-[1.2rem] lg:pt-[2.6875rem] max-w-[10.1875rem] md:max-w-[20.25rem] rounded-xl flex flex-col gap-2 lg:gap-7 drop-shadow-2xl absolute left-[37%] top-[10%] rotate-6 pb-3 z-[200]">
                    <div className="flex justify-center">
                    <Image src='/images/2.png' alt='profile picture' width={100} height={100} className="w-[60px] h-[60px] lg:w-[122px] lg:h-[122px] object-contain" priority/>
                    </div>
                    <p className="font-bold lg:font-medium text-[8px] lg:text-[15px] text-center px-[1.3125rem] lg:px-[2.125rem]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor</p>
                    <div className="flex justify-center items-center gap-1">
                        <Image src='/images/heart-icon.svg' alt="heart icon" width={20} height={20} className="w-[15px] h-[15px] lg:w-6 lg:h-6"/>
                        <p className="text-[8px] lg:text-sm font-medium">321 supporters</p>
                    </div>
                </div>

                {/* Card 3  */}
                <div className="bg-white pt-[1.2rem] lg:pt-[2.6875rem] max-w-[10.1875rem] md:max-w-[20.25rem] rounded-xl flex flex-col gap-2 lg:gap-7 drop-shadow-2xl absolute -right-[5%] top-[20%] -rotate-11 pb-3 z-[200]">
                    <div className="flex justify-center">
                    <Image src='/images/3.png' alt='profile picture' width={100} height={100} className="w-[60px] h-[60px] lg:w-[122px] lg:h-[122px] object-contain" priority/>
                    </div>
                    <p className="font-bold lg:font-medium text-[8px] lg:text-[15px] text-center px-[1.3125rem] lg:px-[2.125rem]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor</p>
                    <div className="flex justify-center items-center gap-1">
                        <Image src='/images/heart-icon.svg' alt="heart icon" width={20} height={20} className="w-[15px] h-[15px] lg:w-6 lg:h-6"/>
                        <p className="text-[8px] lg:text-sm font-medium">321 supporters</p>
                    </div>
                </div>

                {/* Card 4  */}
                <div className="bg-white pt-[1.2rem] lg:pt-[2.6875rem] max-w-[10.1875rem] md:max-w-[20.25rem] rounded-xl flex flex-col gap-2 lg:gap-7 drop-shadow-2xl absolute left-[17%] top-[43%] rotate-6 pb-3 z-[200]">
                    <div className="flex justify-center">
                    <Image src='/images/5.png' alt='profile picture' width={100} height={100} className="w-[60px] h-[60px] lg:w-[122px] lg:h-[122px] object-contain" priority/>
                    </div>
                    <p className="font-bold lg:font-medium text-[8px] lg:text-[15px] text-center px-[1.3125rem] lg:px-[2.125rem]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor</p>
                    <div className="flex justify-center items-center gap-1">
                        <Image src='/images/heart-icon.svg' alt="heart icon" width={20} height={20} className="w-[15px] h-[15px] lg:w-6 lg:h-6"/>
                        <p className="text-[8px] lg:text-sm font-medium">321 supporters</p>
                    </div>
                </div>

                {/* Card 5  */}
                <div className="bg-white pt-[1.2rem] lg:pt-[2.6875rem] max-w-[10.1875rem] md:max-w-[20.25rem] rounded-xl flex flex-col gap-2 lg:gap-7 drop-shadow-2xl absolute left-[52%] top-[43%] -rotate-5 pb-3 z-[200]">
                    <div className="flex justify-center">
                    <Image src='/images/4.png' alt='profile picture' width={100} height={100} className="w-[60px] h-[60px] lg:w-[122px] lg:h-[122px] object-contain" priority/>
                    </div>
                    <p className="font-bold lg:font-medium text-[8px] lg:text-[15px] text-center px-[1.3125rem] lg:px-[2.125rem]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor</p>
                    <div className="flex justify-center items-center gap-1">
                        <Image src='/images/heart-icon.svg' alt="heart icon" width={20} height={20} className="w-[15px] h-[15px] lg:w-6 lg:h-6"/>
                        <p className="text-[8px] lg:text-sm font-medium">321 supporters</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
