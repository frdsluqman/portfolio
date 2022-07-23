import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/js.png'
import REACT from '../assets/react.png'
import TAILWIND from '../assets/tailwind.png'
import GITHUB from '../assets/github.png'

const Skills = () => {
  return (
    <div name="skills" className='bg-[#00203fff] text-gray-100 font-josefin w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-2xl font-bold inline border-b-2 border-[#adefd1ff]'>Skills</p>
                <p className='py-4'>These are technology I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-center'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="html" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-14 mx-auto' src={CSS} alt="css" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 px mx-auto' src={JS} alt="js" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-24 mx-auto' src={REACT} alt="react" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-32 mx-auto' src={TAILWIND} alt="tailwind" />
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GITHUB} alt="github" />
                    <p className='my-4'>GITHUB</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills