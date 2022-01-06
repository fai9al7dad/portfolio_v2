import React from 'react'
import codeImage from '../../../images/codeImage.png'
export default function Section4EN() {
    return (
        <div>
            <div  className="text-right container mx-auto  flex flex-col items-start justify-center h-screen">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className='md:order-1 flex flex-col items-start'>
                        <div className="text-4xl tracking-wide text-left leading-relaxed lg:text-5xl font-bold text-transparent z-20 bg-clip-text bg-gradient-to-r from-pink-300 to-sky-500 mt-10 h-28 md:h-14">
                            Programming and Developing Phase      
                        </div>
                        <div className="text-sm font-bold text-white mt-2">
                            Development
                        </div>
                        <div className="text-3xl tracking-wide text-white leading-relaxed lg:text-3xl mt-3">
                            Programming the design
                        </div>
                        <div >
                            <div className="text-lg tracking-wide text-left leading-relaxed lg:text-2xl mt-5 z-10 text-accent md:py-5">
                            The longest phase, after finishing the research and the design, and with clear software archticeture i can safely start implemnting the software with scaleablitiy and performance in mind                             
                            <span className="text-white ml-1">
                                Either it be a mobile app, website, or BOTH !
                            </span> 
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center justify-center relative ">
                            <div className="absolute top-0 md:top-auto md:right-0  w-72 h-72 blur-3xl bg-indigo-800 opacity-75"/>
                            <div className="flex justify-end">
                                <img src={codeImage} className='mt-5 rounded-2xl z-10 w-full'/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    
        </div>
    )
}


