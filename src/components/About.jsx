import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Abirami R. I am a Full stack web developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap',
        line2: 'I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, Css3,HTML5',
        line3: 'In backend I know Python ,Django'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5 py-32' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl mb-5 w-full font-bold font-sedan'>About Me</h1>
                <p className='pb-5 font-pop'>{config.line1}</p>
                <p className='pb-5 font-pop'>{config.line2}</p>
                <p className='pb-5 font-pop'>{config.line3}</p>
            </div>
        </div>
    </section>
}