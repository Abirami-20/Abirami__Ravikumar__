import React from 'react'
import { useState } from 'react'
const Header = () => {
    const [toggleMenu, setToggleMenu]  = useState(false);
  return (
  <header className='flex justify-between p-4 sticky top-0 '>
    <a className='font-bold font-sedan text-3xl' href='#'>Abirami Ravikumar</a>
    <button onClick={() => setToggleMenu(!toggleMenu)} id="hamburger-button" class="text-3xl md:hidden cursor-pointer relative w-8 h-8">
                &#x2630;
            </button>
    <nav className='hidden md:block font-pop'>
    <ul className='flex gap-4 mt-4'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#details'>Details</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#experience'>Experience</a></li>
    </ul>
    </nav>
    {toggleMenu && <nav className='block md:hidden text-center fixed top-16 left-0 bg-gray-600 w-full h-auto font-pop'>
    <ul className='mt-4'>
        <li className='p-2'><a href='#home'>Home</a></li>
        <li className='p-2'><a href='#about'>About</a></li>
        <li className='p-2'><a href='#details'>Education</a></li>
        <li className='p-2'><a href='#skills'>Skills</a></li>
        <li className='p-2'><a href='#projects'>Projects</a></li>
        <li className='p-2'><a href='#experience'>Experience</a></li>
    </ul>
    </nav>}
  </header>

  )
}

export default Header