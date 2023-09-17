import { logo, mrte } from '../assets/images'

const Footer = () => (
    <footer className="flex  items-center justify-evenly bg-primary py-3">
        <a href="https://mertpatlar.com/" target='_blank'>
            <img src={mrte} className='w-[64px]' alt="Mert Patlar" />
        </a>
        <a href="#">

        <img src={logo} alt="Actunknown" className='h-[64px]' />
        </a>
    </footer>

)

export default Footer