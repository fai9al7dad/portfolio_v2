import { Link } from "gatsby"
import React from "react"
export default function Section1() {
  return (
    <div className="bg-white py-20 md:py-44 px-3 relative md:h-screen flex flex-col items-center justify-center shadow-inner">
      <div className="absolute bottom-0 left-0 w-24 h-24 md:w-2/6 md:h-2/6 blur-3xl z-1  bg-blue-800 opacity-75 md:opacity-20 " />
      <div className="absolute top-0 right-0 w-24 h-24 md:w-2/6 md:h-2/6 blur-3xl bg-purple-800 opacity-75 md:opacity-20 " />
      <div className="flex flex-col items-center justify-center z-20">
        <div className="text-lg text-neutral-600 mb-1">فيصل حداد</div>
        <div className="text-3xl tracking-wide lg:text-4xl  text-neutral-600 text-center">
          مصمم ومبرمج مواقع وتطبيقات
        </div>
        <div className="text-3xl tracking-wide leading-relaxed lg:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 my-10 h-36 md:h-14">
          اساعدك في وضع افكارك وطموحاتك على العالم التقني
        </div>

        <div className="grid md:grid-cols-2 w-full md:w-max">
          <div className="w-full mb-5">
            <a
              href="https://www.faisalhaddad.com"
              target="_blank"
              className="hover:bg-gray-600 bg-gray-700 border-2 border-gray-600 rounded-lg px-5 mr-0 md:mr-5 py-1 flex justify-center items-center"
            >
              <div className="text-lg font-bold py-2 px-5 text-white ">
                سيرة ذاتية
              </div>
              <div className="text-lg">🛠️</div>
            </a>
          </div>
          <div className="w-full">
            <Link
              to="/contact"
              className=" bg-gradient-to-r  from-sky-500 to-sky-600  border-2 border-sky-300 rounded-lg px-3 py-1 flex justify-center items-center"
            >
              <div className="text-lg font-bold py-2 px-5 text-white ">
                تواصل معي
              </div>
              <div className="text-lg">✨</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
