import React from 'react'
import ToolsImages from '../../images/ToolsImage.png'
export default function Section2() {
    return (
        <div className='z-10'>
            <div  className="text-right container mx-auto px-5 md:px-0 md:w-11/12 flex flex-col items-end justify-center h-screen ">
                <div className="grid md:grid-cols-2 gap-20">
                    <div className='md:order-2 flex flex-col items-end'>
                        <div className="text-4xl tracking-wide leading-relaxed lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 mt-10 h-14">
                            مرحلة البحث
                        </div>
                        <div className="text-sm font-bold mt-2">
                            Research
                        </div>
                        <div className="text-3xl tracking-wide leading-relaxed lg:text-3xl  mt-3">
                            اختيار الأنسب والأفضل
                        </div>
                        <div className="text-lg tracking-wide leading-relaxed lg:text-2xl mt-5 text-gray-500 md:py-5 ">
                            تبدأ اهم مرحلة.  في هذه المرحلة ابحث عن المتطلبات للمشروع، ثم اناقشها مع العميل عن طريق رسومات توضيحية
                            ثم بناء على الرسومات والمتطلبات ابدأ ببحث اخر، لإختيار اللغة والاطار والبيئة المناسبة للمشروع 
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


