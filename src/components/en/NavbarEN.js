import React from 'react'
import { Link } from "gatsby"
export default function NavbarEN() {
    return (
        <nav className='bg-black border-b border-gray-700 py-3  fixed top-0 w-full invisible md:visible z-50'>
          <div className="container mx-auto w-8/12 flex flex-row-reverse justify-between items-center">
            <div className='flex items-center'>
                
                <Link to ="/en" className='text-lg text-accent hover:text-white transation duration-150'>Main</Link>
                <Link to ="/en/projects" className='text-lg ml-5 text-accent hover:text-white transation duration-150'>Projects</Link>
                <div className=" bg-gradient-to-r from-sky-500 to-sky-600  border-2 border-sky-300 rounded px-3 py-1 ml-5  flex justify-between items-center">
                    <Link to ="/en/contact" className='text-lg text-white '>Contact me</Link>
                </div>
                <Link to="/" className="bg-gray-700 hover:bg-gray-600 border-2 border-gray-600 cursor-pointer rounded px-2 py-1 ml-5 flex justify-between items-center ">
                    <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"></path></svg>
                     <div className='text-lg text-gray-400 mx-2'>English</div>
                    <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg>
                </Link>
            </div>
            <div>
                <Link to="/en" className='font-bold text-lg text-accent'>Faisal Haddad</Link>
            </div>
          </div>
        </nav>
    )
}
