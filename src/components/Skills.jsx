import React from 'react'
import { AiOutlineJava, AiOutlinePython, AiOutlineJavaScript,AiOutlineHtml5} from "react-icons/ai";

import { FaCss3Alt,FaReact,FaDatabase,FaPalette,FaCode,FaBootstrap} from 'react-icons/fa';
const Skills = () => {

    return (
        <div id='skills' className=' font-sedan font-bold py-32 m-16'>
            <h1 className='text-white text-4xl text-center m-8'>Skills</h1>
            <div className='flex justify-evenly' > 
                <div className='w-[25%]'>
                    <h2 className='text-center text-2xl text-highlight'>Programming</h2>
                    <div className='flex justify-evenly p-4'>
                        <div><AiOutlineJava size={60} /></div>
                        <div><AiOutlinePython size={60} /></div>
                        <div><AiOutlineJavaScript size={60} /></div>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <h2 className='text-center text-2xl text-highlight'>Frontend</h2>
                    <div className='flex justify-evenly p-4'>
                    <div><AiOutlineHtml5 size={60}/></div>
                        <div><FaBootstrap size={60} /></div>
                        <div><FaCss3Alt size={60} /></div>
                        <div><FaPalette size={60}/></div>
                        <div><FaReact size={60}/></div>
                    </div>
                </div>
                <div className='w-[25%]'> 
                    <h2 className='text-center text-2xl text-highlight'>Backend and Database</h2>
                    <div className='flex justify-evenly p-4'>
                        <div><FaCode size={60} /></div>
                        <div><FaDatabase size={60} /></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills
