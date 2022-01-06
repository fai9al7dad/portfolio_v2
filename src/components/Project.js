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
                            <a href={link} target="_blank" className="mt-10 shadow-2xl bg-gradient-to-r  from-sky-500 to-sky-600  border-2 border-sky-300 rounded-lg px-3 py-1 flex justify-center items-center">
                                <div className='text-lg font-bold py-2 px-5 text-white '>رؤية المشروع</div>
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
