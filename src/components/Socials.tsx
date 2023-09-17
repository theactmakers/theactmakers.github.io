import styles, { layout } from '../style'
import { social, insta, x, youtube } from '../assets/images'





const Socials = () => {
  return (
    <section id="socials" className={layout.sectionReverse} >
      <div className={`${layout.sectionImgReverse} max-w-[620px]`}>
        <img src={social} alt="Actunknown Social" className=" w-full rounded-xl " />
      </div>
      <div className={` flex-1 ${styles.flexStart} flex-col`}>
        <h2 className={styles.heading2}>Look At Our Socials</h2>
        <p className={`${styles.paragraph}  mt-5`}>
          Stay connected with ACTUNKNOWN! Explore our social media profiles to stay updated with the latest news, game releases, and behind-the-scenes content. Join us on our social media journey and be a part of our gaming community.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <a href="https://twitter.com/TheActmakers" target="_blank">
            <img src={x} className="mr-10 h-[42px] object-contain  cursor-pointer " alt="github mert patlar" />
          </a>
          <a href="https://www.instagram.com/theactmakers/" target="_blank">
            <img src={insta} className="mr-10 h-[42px] object-contain  cursor-pointer" alt="linkedin mert patlar" />
          </a>
          <a href="https://www.youtube.com/@actunknown" target="_blank">
            <img src={youtube} className="mr-10 h-[42px] object-contain xl:mt-0 mt-5 cursor-pointer" alt="linkedin mert patlar" />
          </a>
        </div>
      </div>

    </section>
  )
}

export default Socials


