import React from 'react'
import monathem from '../../images/projects/monathem.png'
import carplus from '../../images/projects/carplus.png'
import { Link } from 'gatsby'
export default function ProjectsShowCase() {
    return (
        <div className='z-10'>
            <div className="text-4xl tracking-wide leading-relaxed lg:text-5xl text-center mt-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700 mb-20 h-14">
                احدث المشاريع
            </div>
            <div  className="text-right container mx-auto px-5 md:px-0 md:w-11/12 flex flex-col items-end justify-center h-screen">
                <div className="grid md:grid-cols-2 md:gap-20">
                    <div className='order-1 md:order-2 flex flex-col items-end'>
                        <div className="text-4xl tracking-wide leading-relaxed lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r mt-10 md:mt-0 from-blue-500 to-purple-700 h-14">
                            المنظم
                        </div>
                        <div className="text-2xl tracking-wide leading-relaxed lg:text-2xl mt-5 text-gray-500 md:py-5 ">
                        موقع لتنظيم المهام ووضع موعد لها ورؤية المواعيد بشكل بسيط ومنظم
                        </div>
                        <a href="https://monathem.herokuapp.com" target="_blank" className="mt-10 shadow-2xl bg-gradient-to-r  from-sky-500 to-sky-600  border-2 border-sky-300 rounded-lg px-3 py-1 flex justify-center items-center">
                            <div className='text-lg font-bold py-2 px-5 text-white '>رؤية المشروع</div>
                        </a>
                    </div>

                    <div className="">
                        <img src={monathem} className='w-full rounded-2xl shadow-2xl'/>
                    </div>
                </div>
            </div>
            <div  className="text-right container mx-auto px-5 md:px-0 md:w-11/12 flex flex-col items-end justify-center h-screen">
                <div className="grid md:grid-cols-2 md:gap-20">
                    <div className='order-1 md:order-none flex flex-col items-end'>
                        <div className="text-4xl tracking-wide leading-relaxed lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r mt-10 md:mt-0 from-blue-500 to-purple-700 h-14">
                            كار بلس
                        </div>
                        <div className="text-2xl tracking-wide text-right leading-relaxed lg:text-2xl mt-5 text-gray-500 md:py-5 ">
                        صفحة هبوط تعريفية، خاصة بشركة لتأجير السيارات الفاخرة
                        <br/>
                        يستخدم خدمة "احصائيات قوقل" لمعرفة احصائيات وتفاعل المستخدمين مع الموقع
                        </div>
                        <a href="https://www.carplus-sa.com" target="_blank" className="mt-10 shadow-2xl bg-gradient-to-r  from-sky-500 to-sky-600  border-2 border-sky-300 rounded-lg px-3 py-1 flex justify-center items-center">
                            <div className='text-lg font-bold py-2 px-5 text-white '>رؤية المشروع</div>
                        </a>
                    </div>

                    <div className="">
                        <img src={carplus} className='w-full rounded-2xl shadow-2xl'/>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center my-20">
                <Link to ="/projects" className="bg-white border border-gray-200 shadow-2xl rounded-lg flex justify-center items-center py-3 px-10">
                    <div  className='text-lg font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700  '>رؤية جميع المشاريع</div>
                </Link>
            </div>

            <div className=" h-full mx-auto px-5">
                <div className="text-3xl tracking-wide leading-relaxed lg:text-5xl text-center font-bold text-neutral-600 mt-10 ">
                    بحث - تصميم - تطوير - تحسين
                </div>
                <div className="text-2xl text-neutral-600 mt-5 text-center">
                  بعد استلام الفكرة أبدا على هذه المراحل الأربع
                </div>
            </div>
        </div>
    )
}


