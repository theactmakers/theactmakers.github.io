import styles, { layout } from '../style'
import { social, insta, x,youtube } from '../assets/images'





const Socials = () => {
  return (
    <section id="socials" className={layout.sectionReverse} >
      <div className={`${layout.sectionImgReverse} max-w-[620px]`}>
        <img src={social} alt="Actunknown Social" className=" w-full rounded-xl " />
      </div>
      <div className={` flex-1 ${styles.flexStart} flex-col`}>
        <h2 className={styles.heading2}>Look At Our Socials</h2>
        <p className={`${styles.paragraph}  mt-5`}>
          Connect with me on GitHub and LinkedIn to stay up-to-date
          on my latest projects and professional achievements. My GitHub
          profile showcases my coding skills and portfolio, while my LinkedIn
          page highlights my work experience and skills. Don't hesitate to reach
          out if you have any questions or if you'd like to collaborate on a project</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <a href="https://twitter.com/TheActmakers" target="_blank">
            <img src={x} className="mr-10 h-[42px] object-contain  cursor-pointer " alt="github mert patlar" />
          </a>
          <a href="https://www.instagram.com/theactmakers/" target="_blank">
            <img src={insta} className="mr-10 h-[42px] object-contain  cursor-pointer" alt="linkedin mert patlar" />
          </a>
          <a href="https://www.youtube.com/@actunknown" target="_blank">
            <img src={youtube} className="mr-10 h-[42px] object-contain  cursor-pointer" alt="linkedin mert patlar" />
          </a>
        </div>
      </div>

    </section>
  )
}

export default Socials