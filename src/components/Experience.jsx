// import React from 'react';

const Experience = () => {
    const experienceData = [
        {
            company: "T-machine Software Solutions",
            work: "Frontend Developer",
            timeline: " Dec 2023 - current",
        },
        {
            company: "Codebind techonology",
            work: " Web development.",
            timeline: "2019 - 2021",
        },
        {
            company: "Trapsi",
            work: "Intern",
            timeline: "Jan 2020",
        },
    ];

    return (
        <div id='experience'>
            <p className='text-white text-center font-sedan text-4xl font-bold m-8 py-32 '>Experience</p>
            <div className="w-full m-4">
                <div className='flex flex-col md:flex-row px-10 gap-5 font-pop text-white'>
                    {experienceData.map((experience, index) => (
                        <div key={index} className='relative border-2 mx-16 border-white rounded-xl text-xl w-[25%]'>
                            <div className='project-desc'>
                                <p className='text-center px-5 py-2 text-highlight'>{experience.company}</p>
                                <p className='text-center px-5 py-2'>{experience.work}</p>
                                <p className='text-center px-5 py-2'>{experience.timeline}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
