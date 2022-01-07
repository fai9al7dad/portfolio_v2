import React from 'react'
import codeImage from '../../images/codeImage.png'
export default function Section4() {
    return (
        <div>
            <div  className="text-right container mx-auto  flex flex-col items-end justify-center h-screen">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className='flex flex-col items-end'>
                        <div className="text-4xl tracking-wide leading-relaxed lg:text-5xl font-bold text-transparent z-20 bg-clip-text bg-gradient-to-r from-pink-300 to-sky-500 mt-10 h-28 md:h-14">
                            مرحلة التطوير - البرمجة       
                        </div>
                        <div className="text-sm font-bold text-white mt-2">
                            Development
                        </div>
                        <div className="text-3xl tracking-wide text-white leading-relaxed lg:text-3xl mt-3">
                            برمجة التصميم
                        </div>
                        <div className="md:w-3/4">
                            <div className="text-lg tracking-wide leading-relaxed lg:text-2xl mt-5 z-10 text-accent md:py-5">
                                أطول مرحلة، بعد الإنتهاء من البحث والتصميم ، ومع هيكلة واضحة للنظام، أستطيع البرمجة بكل أريحية مع وضع السرعة والتوسع في الحسبان
                                <span className="text-white mr-1">
                                سواء كان تطبيق جوال او موقع أو كلاهما 
                                </span> 
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center justify-center relative ">
                            <div className="absolute top-0 md:top-auto md:left-0  w-72 h-72 blur-3xl bg-indigo-800 opacity-75"/>
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


