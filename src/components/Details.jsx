import React from 'react'

const Details = () => {
    const educationData = [
        {
        Degree: "Bachelor of Engineering",
        Institution: "Panimalar Engineering College",
        UniversityBoard: "Anna University",
        Yearofpassing: "2024",
        CGPAPercentage: "88.8%",

    },
    {
        Degree: "HSC",
        Institution: "S.S.K.V MAT.HR.SEC.SCHOOL",
        UniversityBoard: "State Board",
        Yearofpassing: "2020",
        CGPAPercentage: "82.6%",

    },
    {
        Degree: "SSLC",
        Institution: "S.S.K.V MAT.HR.SEC.SCHOOL",
        UniversityBoard: "State Board",
        Yearofpassing: "2018",
        CGPAPercentage: "92.8%",

    },
]

  return (
    <div id='details'>
      <p className='text-white text-center font-sedan text-4xl font-bold m-8 py-32'>Education</p>
      <div className="w-full m-4">
            <div className='flex flex-col md:flex-row px-10 gap-5 font-pop text-white'>
                {educationData.map((education) => (
                     <div className='relative border-2 mx-16 border-white rounded-xl text-xl w-[25%]'>
                        <div className='project-desc'>
                            <p className='font-pop px-5 py-2 text-white'><span className='text-gold pr-4 font-sedan'>Degree:</span>{education.Degree}</p>
                            <p className='font-pop px-5 py-2 text-white'><span className='text-gold pr-4 font-sedan'>Institution:</span>{education.Institution}</p>
                            <p className='font-pop px-5 py-2 text-white '><span className='text-gold pr-4 font-sedan'>University Board:</span>{education.UniversityBoard}</p>
                            <p className='font-pop px-5 py-2 text-white '><span className='text-gold pr-4 font-sedan'>Year of Passing:</span>{education.Yearofpassing}</p>
                            <p className='font-pop px-5 py-2 text-white '> <span className='text-gold pr-4 font-sedan'>Percentage:</span>{education.CGPAPercentage}</p>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </div>
  )
}

export default Details
