import Image from "next/image";
import Link from "next/link";

import { socialHandles } from "@/constants";


const Footer = props => {
    return (
        <div className="px-9 mt-[5.625rem] lg:mt-[13.0625rem] mb-[2.375rem] lg:mb-[3.125rem]">
            <div className="max-w-[85.25rem] mx-auto">
                {/* Mobile  */}
                <div className="flex lg:hidden justify-center gap-x-[1.53125rem] lg:gap-x-8">
                    {socialHandles.map(handle =>
                        <div key={handle.id}>
                            <Link href={handle.link}>
                                <Image src={handle.icon} alt="twitter icon" width={40} height={40} className="w-5 h-5" />
                            </Link>
                        </div>
                    )}
                </div>
                <div className="lg:hidden text-[#888888] text-[10px] flex justify-between mt-5">
                    <span>
                        &copy; Social:Bucks
                    </span>
                    <div className="flex gap-x-4">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>

                {/* Desktop  */}
                <div className="hidden lg:flex lg:justify-between relative">
                    <span className="text-[#888888] lg:text-[15px]">
                        &copy; Social:Bucks
                    </span>
                 <div className="hidden lg:flex gap-x-10 absolute left-[50%] -translate-x-[50%]">
                    {socialHandles.map(handle =>
                        <div key={handle.id}>
                            <Link href={handle.link}>
                                <Image src={handle.icon} alt="twitter icon" width={40} height={40} className="w-5 h-5" />
                            </Link>
                        </div>
                    )}
                </div>
                    
                    <div className="hidden lg:flex gap-x-4 text-[#888888] text-[15px]">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Footer;
