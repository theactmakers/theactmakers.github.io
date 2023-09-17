import styles from '../style'
import { gameplay } from '../assets/videos'
import OwlCarousel from 'react-owl-carousel';
import { sim, sts1, sts2, sts3, sts4 } from '../assets/images'

const images = [
    {
        src: sim,
        alt: 'Sim the Sand',
        key: 1
    },
    {
        src: sts1,
        alt: 'Sim the Sand',
        key: 2
    },
    {
        src: sts2,
        alt: 'Sim the Sand',
        key: 3
    },
    {
        src: sts3,
        alt: 'Sim the Sand',
        key: 4
    },
    {
        src: sts4,
        alt: 'Sim the Sand',
        key: 5
    }
]

const options = {
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
            dots: false
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
}


const Projects = () => {
    return (
        <>
            <section id="projects" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className="flex-1 justify-center items-start flex-col">
                    <h2 className={styles.heading1}>Sim the Sand</h2>
                    <p className={`${styles.paragraph} mt-2 mb-10`} >
                        "Sim The Sand" is an exhilarating adventure game,
                        blending low-poly TPS visuals and music to immerse
                        players in the enigmatic atmosphere of the micro world.
                        Join Sim, a grain of sand, on a perilous journey to
                        reunite with its family amidst danger and challenges.
                    </p>
                    <OwlCarousel className='owl-theme overflow-hidden max-w-[850px] w-full my-10' {...options}>
                        {images.map((image) => (
                            <div key={image.key}>
                                <img src={image.src} alt={image.alt} className='rounded-xl' />
                            </div>
                        ))}
                    </OwlCarousel>
                    <iframe src="https://store.steampowered.com/widget/2563580/" frameBorder="0" className='w-full' height="190"></iframe>
                </div>
                <div className={`flex-initial  flex ${styles.flexEnd} md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col `}>
                    <video autoPlay loop muted src={gameplay} className='rounded-xl max-h-[700px]' ></video>
                </div>
            </section>


        </>
    )
}

export default Projects