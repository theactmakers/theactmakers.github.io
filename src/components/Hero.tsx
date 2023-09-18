import { logo } from '../assets/images'
import { hero } from '../assets/videos'
import style from '../style'
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const EmbedVideo = (props) => (
  <div dangerouslySetInnerHTML={{
    __html: `
       <video
         loop
         muted
         autoplay
         playsinline
         src="${props.src}"
         class="${props.className}"
       />,
     ` }}></div>
)


const Hero = () => (
  <>
    <div className='w-full h-screen flex justify-start items-center xl:pl-40 z-10 relative' >
      <div className='flex flex-col justify-start items-start'>
        <img src={logo} alt="logo" className='w-72' />
        <p className={style.paragraph}>
          Reviving Classic Storytelling in Gaming with a Passion for Artistry over Profits
        </p>
      </div>
    </div >
    <LazyLoadComponent>
      {EmbedVideo({ src: hero, className: '-z-0 absolute top-0 left-0 brightness-50 w-full h-screen object-cover ' })}
    </LazyLoadComponent>
  </>
)


export default Hero