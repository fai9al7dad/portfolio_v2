import { Link } from 'gatsby'
import React from 'react'
export default function Section1() {
    return (
        <div className='bg-gray-900 py-20 md:py-44 px-3 relative h-screen flex flex-col items-center justify-center'>
            <div className="absolute top-0 left-0 w-72 h-72 blur-3xl bg-sky-800 opacity-0 md:opacity-25"/>
            <div className="absolute top-0 right-0 w-72 h-72 blur-3xl bg-blue-800 opacity-0 md:opacity-25"/>
            <div className="flex flex-col items-center justify-center z-10">
                <div className="text-lg text-white mb-1">فيصل حداد</div>
                <div className="text-2xl tracking-wide lg:text-4xl font-bold text-white text-center">
                    مصمم ومبرمج مواقع وتطبيقات
                </div>
                <div className="text-3xl tracking-wide leading-relaxed lg:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 my-10 h-36 md:h-14">
                    اساعدك في وضع افكارك وطموحاتك على العالم التقني
                </div>
                
                <div className="grid md:grid-cols-2 w-full md:w-max">
                    <div className="w-full mb-5">
                        <Link to ="/project" className="hover:bg-gray-600 bg-gray-700 border-2 border-gray-600 rounded-lg px-5 mx-5 py-1 flex justify-center items-center">
                            <div className='text-lg font-bold py-2 px-5 text-white '>مشاريعي</div>
                            <div className="text-lg">🛠️</div>
                        </Link>
                    </div>
                    <div className="w-full">
                        <Link to ="/contact" className=" bg-gradient-to-r  from-sky-500 to-sky-600  border-2 border-sky-300 rounded-lg px-3 mx-5 py-1 flex justify-center items-center">
                            <div  className='text-lg font-bold py-2 px-5 text-white '>تواصل معي</div>
                            <div className="text-lg">✨</div>
                        </Link>
                    </div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white text-center mt-10 md:mt-5">
                    بحث - تصميم - تطوير - تحسين
                </div>
                <div className="text-lg text-white text-center mt-5">
                  بعد استلام الفكرة أبدا على هذه المراحل الثلاث
                </div>
            </div>
        </div>
    )
}
