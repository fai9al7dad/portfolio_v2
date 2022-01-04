import React from 'react'
import codeImage from '../../images/codeImage.png'
export default function Section4() {
    return (
        <div>
            <div  className="text-right container mx-auto px-5 md:px-0 md:w-8/12 flex flex-col font-bold items-end">
                <div className="text-2xl tracking-wide leading-relaxed lg:text-3xl font-bold text-transparent z-20 bg-clip-text bg-gradient-to-r from-pink-300 to-sky-500 mt-10 h-11">
                    مرحلة التطوير - البرمجة       
                </div>
                <div className="text-sm font-bold text-white mt-2">
                    Development
                </div>
                <div className="text-2xl tracking-wide text-white leading-relaxed lg:text-3xl font-bold mt-3">
                    برمجة التصميم
                </div>
                <div className="md:w-3/4">
                    <div className="text-md tracking-wide leading-relaxed lg:text-lg mt-5 z-10 text-accent md:py-5">
                    تبدأ اهم وأطول مرحلة.  في هذه المرحلة ابحث واختار لغة البرمجة 
    والاطار المناسب لاداء طلبك، 
                        <span className="text-white mr-1">
                        سواء كان تطبيق جوال او موقع أو كلاهما 
                        </span> 
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center relative">
                <div className="absolute left-0  w-72 h-72 blur-3xl bg-indigo-800 opacity-75"/>
                    <img src={codeImage} className='mt-5 rounded-2xl z-10'/>
                </div>
            </div>
    
        </div>
    )
}


