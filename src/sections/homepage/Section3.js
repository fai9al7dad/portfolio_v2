import React from 'react'
import adobexdDesign from '../../images/adobexdDesign.png'
export default function Section3() {
    return (
        <div>
            <div  className="text-right container mx-auto px-5 md:px-0  flex flex-col items-end justify-center h-screen ">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className='md:order-2 flex flex-col items-end'>
    
                        <div className="text-4xl tracking-wide leading-relaxed lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-500 mt-10 h-14">
                            مرحلة التصميم
                        </div>
                        <div className="text-sm font-bold text-white mt-2">
                            UI/UX
                        </div>
                        <div className="text-3xl tracking-wide text-white leading-relaxed lg:text-3xl mt-3">
                            التركيز على تجربة المستخدم
                        </div>
                        <div className="">
                            <div className="text-lg tracking-wide leading-relaxed lg:text-2xl mt-5 text-gray-500 z-10 md:py-5">
                                بعد فهمي للفكرة العامة من العميل أبدا اصمم تصميمًا 
                                <span className="text-white">
                                يركز أولا على
                                وصول المستخدم للغاية التي يريدها بأسهل طريقة ممكنة
                                </span> 
                            </div>
                        </div>
                    </div>
               
                        <div className="flex flex-col items-center justify-center relative">
                        <div className="absolute top-0 md:top-auto md:right-0  w-72 h-52 md:h-72 blur-3xl bg-pink-500 opacity-50"/>
                            <div className="flex flex-col items-center z-20">
                                <img src={adobexdDesign} className='mt-5 rounded-2xl z-10 w-full '/>
                                <div className="text-xs font-normal text-accent mt-2 z-10">ADOBE XD صورة أثناء تصميم الموقع عن طريق برنامج</div>    
                            </div>
                            
                        </div>

                </div>
                
            </div>
    
        </div>
    )
}


