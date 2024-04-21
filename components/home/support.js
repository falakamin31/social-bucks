import Image from "next/image";

const Support = props => {
  return (
    <div className="px-9 pt-[4.625rem] lg:pt-[11.75rem] relative">
      {/* <div className="invisible xl:visible absolute lg:right-[0%] 2xl:right-[8%] xl:-top-[30%] 2xl:-top-[33%]">
        <Image src='/images/patterns/pattern-3.svg' alt='pattern' width={50} height={50} className="w-20 h-20 lg:w-36 lg:h-36 blur-[10px] object-cover z-40" priority />
      </div>
      <div className="invisible xl:visible absolute xl:-right-[15%] 2xl:-right-[4%] xl:-top-[20%] 2xl:-top-[10%]">
        <Image src='/images/patterns/pattern-4.svg' alt='pattern' width={50} height={50} className="w-20 h-20 lg:w-60 lg:h-60 xl:w-80 xl:h-80 blur-[10px] object-cover z-40" priority />
      </div> */}
      <div className="max-w-[85.25rem] mx-auto bg-dark-gray text-white border-[0.5px] rounded-[13px] pt-[2.5rem] lg:pt-[7.8125rem] px-[1.625rem] lg:px-[3.4375rem] flex flex-col lg:flex-row gap-y-[2.625rem] lg:gap-x-9 xl:gap-x-28 2xl:gap-x-[8.5rem] pb-[1.8125rem] lg:pb-[4.9375rem]">
        <div className="flex-1 max-w-[35rem]">
          <p className="uppercase text-green text-[10px] lg:text-[20px] text-left font-eina font-bold tracking-[2px]">Support</p>
          <h2 className="font-eina font-bold text-3xl lg:text-[45px] text-white mt-[14px] lg:mt-[20px] leading-[35px] lg:leading-[3.4375rem]">
            Give Your Audience An Easy Way To Say Thanks
          </h2>
          <p className="font-medium leading-4 lg:leading-[23px] text-[10px] lg:text-[15px] text-white mt-[14px] lg:mt-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.</p>
        </div>
        <div className="flex-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, iure! Natus illo ducimus esse atque deleniti autem assumenda et eum aliquid, quasi neque iusto consectetur, tempore dicta ad perspiciatis eos.
        </div>

        {/* Patterns  */}
        <div className="absolute left-[80%] sm:left-[2%] -bottom-[4%] md:-bottom-[20%] lg:-bottom-[15%] 2xl:bottom-[20%]">
          <Image src='/images/patterns/pattern-5.svg' alt='pattern' width={50} height={50} className="w-24 h-24 lg:w-32 lg:h-32 blur-[10px]" priority />
          </div>
      </div>
    </div>
  );
};

export default Support;
