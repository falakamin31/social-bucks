import Image from "next/image";

const Feature = ({feature}) => {
    const {title , description } = feature;
    console.log(title, description)
    return (
        <div className="flex mb-7 lg:mb-0 gap-3 lg:gap-4">
            <Image src='/images/features-pattern.svg' alt={feature.title} width={30} height={30} className='w-6 h-6 lg:w-8 lg:h-8 object-contain' priority/>
            <div className="">
            <h3 className='text-white text-xs lg:text-lg font-eina font-bold'>{feature.title}</h3>
            <p className="mt-[6px] lg:mt-5 font-medium text-white text-[10px] lg:text-[15px]">{feature.description}</p>
            </div>
        </div>
    );
};

export default Feature;
