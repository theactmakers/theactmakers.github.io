import { logo } from '../assets/images'
import { hero } from '../assets/videos'
import style from '../style'

const Hero = () => {
  return (
    <>
      <div className='w-full h-screen flex justify-start items-center xl:pl-40 z-10 relative' >
        <div className='flex flex-col justify-start items-start'>
          <img src={logo} alt="logo" className='w-72' />
          <p className={style.paragraph}>
            Reviving Classic Storytelling in Gaming with a Passion for Artistry over Profits
          </p>
        </div>
      </div >
      <video src={hero} autoPlay loop muted className='-z-0 absolute top-0 left-0 brightness-50 w-full h-screen object-cover ' />
    </>
  )
}

export default Hero