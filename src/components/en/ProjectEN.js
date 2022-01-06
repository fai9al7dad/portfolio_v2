import React from 'react'

export default function ProjectEN({title,desc,link,image,order, isPrivate}) {
    return (
        <div>
              <div  className="text-right container mx-auto px-5 md:px-0 md:w-11/12 flex flex-col items-end justify-center h-screen">
                <div className="grid md:grid-cols-2 md:gap-20">
                <div className="">
                        <img src={image} className='w-full rounded-2xl shadow-2xl'/>
                    </div>
                    <div className={`md:order-none flex flex-col items-start`} >
                        <div className="text-4xl tracking-wide leading-relaxed lg:text-5xl font-bold text-left text-transparent bg-clip-text bg-gradient-to-r mt-10 md:mt-0 from-blue-500 to-purple-700 h-14">
                            {title}
                        </div>
                        <div className="text-2xl tracking-wide text-left leading-relaxed lg:text-2xl mt-5 text-gray-500 md:py-5 ">
                            {desc}
                        </div> 
                        {isPrivate ? 
                            <div className="mt-10 shadow-2xl bg-gradient-to-r cursor-not-allowed from-gray-200 to-gray-300  border-2 border-gray-300 rounded-lg px-3 py-1 flex justify-center items-center">
                                <div className='text-lg font-bold py-2 px-5 text-gray-600 '>Sorry, this link is private 😊</div>
                            </div>
                            :
                            <a href={link} target="_blank" className="mt-10 shadow-2xl bg-gradient-to-r py-3 px-9 from-sky-500 to-sky-600  border-2 border-sky-300 rounded-lg flex justify-center items-center">
                                <div className='text-lg font-bold mr-2 text-white'>See the project</div>
                                <div className="">
                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                </div>
                            </a>    
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
