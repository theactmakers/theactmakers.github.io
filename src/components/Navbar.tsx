import { useState } from 'react'
import { menu, close } from '../assets/icons';
import { navLinks } from '../constants';
import { logo } from '../assets/images'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='w-full xl:max-w-[1280px] navbar flex py-6 justify-between px-5 items-center absolute m-auto left-0 right-0 z-20 '>
            <a href={`#`} className='xl:hidden'>
                <img src={logo} alt="Ferrari" className="h-[64px]" />
            </a>
            <ul className="text-xl list-none sm:flex hidden justify-center items-center flex-1">
                <li className='font-poppins font-normal cursor-pointer  mr-16 hover:text-secondary text-white'>
                    <a href="#about">About</a>
                </li>
                <li className='font-poppins font-normal cursor-pointer  mr-16 hover:text-secondary text-white'>
                    <a href="#projects">Projects</a>
                </li>
                <li className='mr-16'>
                    <img src={logo} alt="actunknown" className='w-[200px] mx-1mr-16 cursor-pointer ' />
                </li>
                <li className='font-poppins font-normal cursor-pointer  mr-16 hover:text-secondary text-white'>
                    <a href="#socials">Socials</a>
                </li>
                <li className='font-poppins font-normal cursor-pointer  mr-16 hover:text-secondary text-white'>
                    <a href="mailto:business@actunknown.com">Contact</a>
                </li>
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px]  object-contain" onClick={() => setToggle((prev) => !prev)} />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#14120e] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1 ">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`font-poppins font-normal cursor-pointer  text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} hover:text-secondary text-white`}>
                                <a href={`#${nav.id}`}  >{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar