import { features } from "@/constants";
import {Feature} from "@/components";
const MakesUsSpecial = props => {
    return (
    <div className="px-9 pt-[5.625rem] pb-[6.125rem] lg:pt-[12.435rem] lg:pb-[14.5rem]">    
      <div className="max-w-[85.25rem] mx-auto flex flex-col lg:flex-row gap-y-[2.625rem] lg:gap-x-9 xl:gap-x-28 2xl:gap-x-[8.5rem]">
        <div className="flex-1 max-w-[35rem]">
          <p className="text-green text-[0.625rem] lg:text-xl font-eina font-bold uppercase">WHAT MAKE US SPECIALS</p> 
          <h2 className="font-eina font-bold text-3xl lg:text-[45px] text-white mt-4 lg:mt-[1.5625rem] leading-[35px] lg:leading-[3.4375rem]">
            Designed For Creators, Not For Businesses
          </h2>
          </div> 
          <div className="flex-1 lg:grid lg:grid-cols-2 lg:gap-y-[4.0625rem] 2xl:gap-y-[4.1875rem] lg:gap-x-[4rem] 2xl:gap-x-[5.3125rem]">
            {features.map(feature => <Feature key={feature.id} feature={feature}/>)}
            
            </div>   
        </div>
        </div>
        
    );
};

export default MakesUsSpecial;
