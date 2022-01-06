import React from 'react'
import ToolsImages from '../../../images/ToolsImage.png'
export default function Section2EN() {
    return (
        <div className='z-10'>
            <div  className="text-right container mx-auto px-5 md:px-0 md:w-11/12 flex flex-col items-start justify-center h-screen ">
                <div className="grid md:grid-cols-2 gap-20">
                    <div className='flex flex-col items-start'>
                        <div className="text-4xl tracking-wide leading-relaxed lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 mt-10 h-14">
                            Researching Phase
                        </div>
                        <div className="text-sm font-bold mt-2">
                            Research
                        </div>
                        <div className="text-3xl tracking-wide leading-relaxed lg:text-3xl  mt-3">
                            Choosing The Best
                        </div>
                        <div className="text-lg tracking-wide text-left leading-relaxed lg:text-2xl mt-5 text-gray-500 md:py-5 ">
                            Arguably the most important phase, on this phase i search the user requirements, then i discuss it with the client using (Diagrams), then based on those diagrams i start another research, to choose the programming language and the appropriate frameworks 
                        </div>
                    </div>
                    <div className="flex justify-end">
                    <img src={ToolsImages} className='w-full'/>
                    </div>
                    </div>
            </div>
    
        </div>
    )
}


