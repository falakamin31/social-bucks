import Image from 'next/image';
import Link from 'next/link';

const NavBar = props => {
    return (
        <header>
            <nav className='max-w-[120rem] mx-auto'>
            <div className="h-[2.7rem] lg:h-[5.8125rem] bg-dark-black flex justify-end items-end px-[2.625rem] relative">
                    {/* -------------- Mobile ------------  */}
                    <div className='lg:hidden absolute bottom-0 left-[50%] -translate-x-[50%]'>
                        <Image src='/logo.svg' alt='logo' width={110} height={14} className='w-[6.875rem] h-[0.875rem] object-contain' priority/>
                    </div>
                    {/* ------------ Tablet, Laptop & Desktop ------------ */}
                    <div className='hidden lg:block absolute bottom-0 left-[50%] -translate-x-[50%]'>
                        <Image src='/logo.svg' alt='logo' width={190}height={24} className='w-[11.875rem] h-[1.5rem] object-contain' priority/>
                    </div>
                    <Button/>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;

const Button = () => {
    return (
        <Link href='/'>
        <button className='hidden lg:block text-right capitalize bg-green px-12 py-3 rounded-[10px] text-[15px] font-eina font-bold hover:bg-dark-green transition-all ease-in-out duration-200 text-dark-black'>
            Start My Page
        </button>
        </Link>
    )
}
