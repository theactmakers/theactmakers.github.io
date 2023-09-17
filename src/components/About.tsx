import {about} from '../assets/images'
import style, { layout } from '../style'

const About = () => {
    // return a section that have a picture on 50% left side and 50% right side have a text
    return (
        <section id='about' className={layout.section}>
        <div className={`${layout.sectionImg} flex-col`}>
          <img src={about} alt="" className="rounded-xl sm:mr-10 z-[5]" />
          <div className="absolute z-[0] w-[50%] h-[50%] left-0 bottom-0 blue__gradient" />
        </div>
        <div className={`justify-end ${layout.sectionInfo2} text-right `}>
          <h2 className={style.heading2}>Be Ready For A Flight</h2>
          <p className={`${style.paragraph} max-w-[470px] mt-5`}>
            Hello! My name is Mert, and I am a full stack web developer
            with over 3 years of experience. I have a passion for
            coding and love creating clean, efficient, and user-friendly web
            applications. In addition to my work as a developer, I am also
            currently computer engineering student at Ankara University.
          </p>
  
        </div>
  
      </section>
    )

}

export default About