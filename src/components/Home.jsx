import HeroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineLinkedin,AiOutlineInstagram ,AiOutlineMail} from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full Stack Developer',
        social: {
            linkedin: 'https://in.linkedin.com/company/jvl-code',
            Instagram:'https://www.instagram.com/abiramiravikumar6/',
            Github:'https://github.com/Abirami-20',
            mail:'divyaabi047@gmail.com'
        }
    }


    return <section id='home' className='flex flex-col md:flex-row px-5 py-32 justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im  Abirami <span className='text-highlight'>R</span> 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
                <a href={config.social.Github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.Instagram} className=' pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
                <a href={config.social.mail} className='pr-5 hover:text-white'><AiOutlineMail size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
