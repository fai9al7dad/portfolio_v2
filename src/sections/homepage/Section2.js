import React from 'react'
import ToolsImages from '../../images/ToolsImage.png'
export default function Section2() {
    return (
        <div>
            <div  className="text-right container mx-auto px-5 md:px-0 md:w-8/12 flex flex-col items-end font-bold">
                <div className="text-2xl tracking-wide leading-relaxed lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 mt-10 h-11">
                    مرحلة البحث
                </div>
                <div className="text-sm font-bold mt-2">
                    Research
                </div>
                <div className="text-2xl tracking-wide leading-relaxed lg:text-3xl font-bold mt-3">
                    التركيز على تجربة المستخدم
                </div>
                <div className="md:w-3/4">
                <div className="text-md tracking-wide leading-relaxed lg:text-lg mt-5 text-gray-500 md:py-5 ">
                (Diagrams)تبدأ اهم مرحلة.  في هذه المرحلة ابحث عن المتطلبات للمشروع، ثم اناقشها مع العميل عن طريق رسومات توضيحية
                ثم بناء على الرسومات والمتطلبات ابدأ ببحث اخر، لإختيار اللغة والاطار والبيئة المناسبة للمشروع 
                </div>
                </div>
                    <img src={ToolsImages} />


            </div>
    
        </div>
    )
}


