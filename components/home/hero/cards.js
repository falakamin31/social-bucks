import Image from "next/image";

const Cards = props => {
    return (
        <>
                {/* Card 1  */}
              <div className="select-none max-w-[10.1875rem] lg:max-w-[20.25rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative -left-[80%] xl:-left-[180%]">
                        <div className="bg-white pt-[1.2rem] lg:pt-[2.6875rem] rounded-xl flex flex-col gap-2 lg:gap-7 drop-shadow-2xl -rotate-6 pb-3 z-[10]">
                        <div className="flex justify-center">
                        <Image src='/images/1.png' alt='profile picture' width={100} height={100} className="w-[60px] h-[60px] lg:w-[122px] lg:h-[122px] object-contain" priority/>
                        </div>
                        <p className="font-bold lg:font-medium text-[8px] lg:text-[15px] text-center px-[1.3125rem] lg:px-[2.125rem]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor</p>
                        <div className="flex justify-center items-center gap-1">
                        <Image src='/images/heart-icon.svg' alt="heart icon" width={20} height={20} className="w-[15px] h-[15px] lg:w-6 lg:h-6"/>
                        <p className="text-[8px] lg:text-sm font-medium">321 supporters</p>
                    </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="max-w-[10.1875rem] lg:max-w-[20.25rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative left-[17%] -top-[45px] xl:top-[20px] xl:-left-[85%]">
                        <div className="bg-white pt-[1.2rem] lg:pt-[2.6875rem] max-w-[10.1875rem] md:max-w-[20.25rem] rounded-xl flex flex-col gap-2 lg:gap-7 drop-shadow-2xl  rotate-6 pb-3 z-[200]">
                            <div className="flex justify-center">
                                <Image src='/images/2.png' alt='profile picture' width={100} height={100} className="w-[60px] h-[60px] lg:w-[122px] lg:h-[122px] object-contain" priority />
                            </div>
                            <p className="font-bold lg:font-medium text-[8px] lg:text-[15px] text-center px-[1.3125rem] lg:px-[2.125rem]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor</p>
                            <div className="flex justify-center items-center gap-1">
                                <Image src='/images/heart-icon.svg' alt="heart icon" width={20} height={20} className="w-[15px] h-[15px] lg:w-6 lg:h-6" />
                                <p className="text-[8px] lg:text-sm font-medium">321 supporters</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Card 3  */}
                <div className="max-w-[10.1875rem] lg:max-w-[20.25rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative -right-[88%] xl:-top-[35px] xl:-right-[10%]">
                        <div className="bg-white pt-[1.2rem] lg:pt-[2.6875rem] max-w-[10.1875rem] md:max-w-[20.25rem] rounded-xl flex flex-col gap-2 lg:gap-7 drop-shadow-2xl -rotate-6 pb-3 z-[200]">
                            <div className="flex justify-center">
                                <Image src='/images/3.png' alt='profile picture' width={100} height={100} className="w-[60px] h-[60px] lg:w-[122px] lg:h-[122px] object-contain" priority />
                            </div>
                            <p className="font-bold lg:font-medium text-[8px] lg:text-[15px] text-center px-[1.3125rem] lg:px-[2.125rem]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor</p>
                            <div className="flex justify-center items-center gap-1">
                                <Image src='/images/heart-icon.svg' alt="heart icon" width={20} height={20} className="w-[15px] h-[15px] lg:w-6 lg:h-6" />
                                <p className="text-[8px] lg:text-sm font-medium">321 supporters</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Card 4  */}
                <div className="max-w-[10.1875rem] lg:max-w-[20.25rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative right-[32%] top-[110px] xl:-right-[100%] xl:top-[35px]">
                        <div className="bg-white pt-[1.2rem] lg:pt-[2.6875rem] max-w-[10.1875rem] md:max-w-[20.25rem] rounded-xl flex flex-col gap-2 lg:gap-7 drop-shadow-2xl rotate-5 pb-3 z-[200]">
                            <div className="flex justify-center">
                                <Image src='/images/5.png' alt='profile picture' width={100} height={100} className="w-[60px] h-[60px] lg:w-[122px] lg:h-[122px] object-contain" priority />
                            </div>
                            <p className="font-bold lg:font-medium text-[8px] lg:text-[15px] text-center px-[1.3125rem] lg:px-[2.125rem]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor</p>
                            <div className="flex justify-center items-center gap-1">
                                <Image src='/images/heart-icon.svg' alt="heart icon" width={20} height={20} className="w-[15px] h-[15px] lg:w-6 lg:h-6" />
                                <p className="text-[8px] lg:text-sm font-medium">321 supporters</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Card 5  */}
                <div className="max-w-[10.1875rem] lg:max-w-[20.25rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <div className="relative left-[45%] xl:left-[180%] top-[110px] xl:top-[10px]">
                        <div className="bg-white pt-[1.2rem] lg:pt-[2.6875rem] max-w-[10.1875rem] md:max-w-[20.25rem] rounded-xl flex flex-col gap-2 lg:gap-7 drop-shadow-2xl -rotate-5 pb-3 z-[200]">
                            <div className="flex justify-center">
                                <Image src='/images/4.png' alt='profile picture' width={100} height={100} className="w-[60px] h-[60px] lg:w-[122px] lg:h-[122px] object-contain" priority />
                            </div>
                            <p className="font-bold lg:font-medium text-[8px] lg:text-[15px] text-center px-[1.3125rem] lg:px-[2.125rem]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor</p>
                            <div className="flex justify-center items-center gap-1">
                                <Image src='/images/heart-icon.svg' alt="heart icon" width={20} height={20} className="w-[15px] h-[15px] lg:w-6 lg:h-6" />
                                <p className="text-[8px] lg:text-sm font-medium">321 supporters</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Cards;
