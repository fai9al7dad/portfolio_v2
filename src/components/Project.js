import React from 'react'

export default function Project({title,desc,link,image,order, isPrivate}) {
    return (
        <div>
              <div  className="text-right container mx-auto px-5 md:px-0 md:w-11/12 flex flex-col items-end justify-center h-screen">
                <div className="grid md:grid-cols-2 md:gap-20">
                    <div className={`order-1 md:order-none flex flex-col items-end`} >
                        <div className="text-4xl tracking-wide leading-relaxed lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r mt-10 md:mt-0 from-blue-500 to-purple-700 h-14">
                            {title}
                        </div>
                        <div className="text-2xl tracking-wide text-right leading-relaxed lg:text-2xl mt-5 text-gray-500 md:py-5 ">
                            {desc}
                        </div> 
                        {isPrivate ? 
                            <div className="mt-10 shadow-2xl bg-gradient-to-r cursor-not-allowed from-gray-200 to-gray-300  border-2 border-gray-300 rounded-lg px-3 py-1 flex justify-center items-center">
                                <div className='text-lg font-bold py-2 px-5 text-gray-600 '> 😊 عذرا الرابط خاص</div>
                            </div>
                            :
                            <a href={link} target="_blank" className="mt-10 shadow-2xl bg-gradient-to-r  py-3 px-8 from-sky-500 to-sky-600  border-2 border-sky-300 rounded-lg  flex justify-center items-center">
                                <div className="">
                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                </div>
                                <div className='text-lg font-bold text-white ml-2'>رؤية المشروع</div>
                            </a>    
                        }
                    </div>

                    <div className="">
                        <img src={image} className='w-full rounded-2xl shadow-2xl'/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
