import websiteImg1 from '../assets/expensetracker1.png';
import websiteImg2 from '../assets/MEAL MASTERY IMG.png';
import websiteImg3 from '../assets/to-do-list.png';

export default function Projects() {

    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'Expense Tracker',
                link: 'https://github.com/Abirami-20/Expense-Tracker'
            },
            {
                image: websiteImg2,
                description: 'Meal Mastery ',
                link: 'https://github.com/Abirami-20/Backend_MealMastery'
            },
            {
                image: websiteImg3,
                description: 'Todo App',
                link: 'https://github.com/Abirami-20/todo_list-'
            }
        ]
    }

    return <section id='projects' className="flex font-sedan flex-col py-32 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col  px-10 py-5 m-8">
                <h1 className="text-4xl text-center mb-5 w-full font-bold m-6">Projects</h1>
                <p className='text-center font-pop'>These are some of my best projects. I have built these with React,HTML,CSS3,Django Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col justify-evenly md:flex-row px-10 gap-5 font-pop'>
                {config.projects.map((project) => (
                    <div className='relative'>
                        <img className='h-[200px] w-[300px]' src={project.image} />
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5 text-gold'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn text-gold' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}