import { Link } from 'gatsby'
import React from 'react'
export default function Section5() {
    return (
        <div>
            <div  className="text-right container mx-auto px-5 md:px-0 md:w-8/12 flex flex-col font-bold items-center">
            <svg class="w-28 md:w-40 text-green-500 mt-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>

                <div className="text-2xl tracking-wide leading-relaxed lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700  h-11">
                    مرحلة التسليم والتحسين
                </div>
                <div className="text-sm font-bold mt-2">
                    Testing and monitoring
                </div>
                <div className="text-2xl tracking-wide  leading-relaxed lg:text-3xl font-bold mt-3">
                    ضمان استمرارية البرنامج
                </div>
                <div className="md:w-3/4">
                    <div className="text-md tracking-wide leading-relaxed lg:text-lg mt-5 text-gray-500 md:py-5 text-center ">
                    هذه المرحلة تكون بعد تسليم البرنامج الجاهز اليك، ويتم فيها متابعة البرنامج بشكل مستمر للتأكد من جودته
 ولضمان ان كل شيء يعمل كما هو مطلوب، ولقبول الإضافات الجديدة والمميزات الى البرنامج
                    </div>
                </div>

                <Link to ="/contact" className=" bg-gradient-to-r from-sky-500 to-sky-600  border-2 border-sky-300 rounded-lg px-10 mx-5 mt-10 py-3 flex justify-center items-center">
                    <div  className='text-lg font-bold text-white mr-2 '> ! </div>
                    <div  className='text-lg font-bold text-white '>ابدأ مشروعك</div>
                    {/* <div className="text-lg">!</div> */}
                </Link>
            </div>
    
        </div>
    )
}


