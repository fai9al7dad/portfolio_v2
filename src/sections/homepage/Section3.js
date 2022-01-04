import React from 'react'
import adobexdDesign from '../../images/adobexdDesign.png'
export default function Section3() {
    return (
        <div>
            <div  className="text-right container mx-auto px-5 md:px-0 md:w-8/12 flex flex-col items-end font-bold">
                <div className="text-2xl tracking-wide leading-relaxed lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-sky-500 mt-10 h-11">
                    مرحلة التصميم
                </div>
                <div className="text-sm font-bold text-white mt-2">
                    UI/UX
                </div>
                <div className="text-2xl tracking-wide text-white leading-relaxed lg:text-3xl font-bold mt-3">
                    التركيز على تجربة المستخدم
                </div>
                <div className="md:w-3/4">
                    <div className="text-md tracking-wide leading-relaxed lg:text-lg mt-5 text-gray-500 z-10 md:py-5">
                        بعد فهمي للفكرة العامة من العميل أبدا اصمم تصميمًا 
                        <span className="text-white">
                        يركز أولا على
                        وصول المستخدم للغاية التي يريدها بأسهل طريقة ممكنة
                        </span> 
                    </div>
                </div>
                
                <div className="flex flex-col items-center justify-center relative">
                <div className="absolute top-0  w-72 h-72 blur-3xl bg-sky-800 opacity-75"/>

                    <img src={adobexdDesign} className='mt-5 rounded-2xl z-10'/>
                    <div className="text-sm text-accent mt-1 z-10">ADOBE XD صورة أثناء تصميم الموقع عن طريق برنامج</div>
                </div>
            </div>
    
        </div>
    )
}


