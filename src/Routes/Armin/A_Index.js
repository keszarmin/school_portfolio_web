import React from 'react'
import NN_P from "./assets/Neural_Networks.webp"
import NN_G from "./assets/1616944778816.gif"
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import sport from "./assets/sport.jpg"

function A_Index() {
  return (
    <>
    <div className="bg-white">
    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#FFFFFF" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Kész Ármin portfoliója
          </h2>
          <p className="mt-6 text-pretty text-lg/8 text-gray-300">
            16 éves Pécsi Széchenyis tanuló vagyok. Sokat foglalkozok Neurális hálók fejlesztésével és érdekelnek az MI-vel kapcsolatos technológiák.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#me"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Folytatás
            </a>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <img
            alt="App screenshot"
            src={NN_P}
            width={1824}
            height={1080}
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>
  </div>
  <div id='me' className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
   <div className="absolute inset-0 -z-10 overflow-hidden">
     <svg
       aria-hidden="true"
       className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
     >
       <defs>
         <pattern
           x="50%"
           y={-1}
           id="e813992c-7d03-4cc4-a2bd-151760b470a0"
           width={200}
           height={200}
           patternUnits="userSpaceOnUse"
         >
           <path d="M100 200V.5M.5 .5H200" fill="none" />
         </pattern>
       </defs>
       <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
         <path
           d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
           strokeWidth={0}
         />
       </svg>
       <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
     </svg>
   </div>

    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      
    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img
          alt=""
          className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          src={sport}
          />
      </div>

      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base/7 font-semibold text-indigo-600">Rólam</p>
            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Életem és mindnapjaim
            </h1>
            <p className="mt-6 text-xl/8 text-gray-700">
              Orfűn élek lassan mér 14 éve altalános iskolába 3 helyre is jártam de szerencsére már végeztem és pécsre járok a Széchenyibe amit szeretek is. Iskola után kondiba járok a barátaimal. A szabadidőmbe szeretek a barátaimal lenni és sportolni Orfű erre egy megfelelő hely. A családommal nagyon jó kapcsolatba vagyok apám is informatikával foglalkozott és most autók tuningolásával foglalkozik amelyben néha vissza köszön az informatika.
            </p>
          </div>
        </div>
      </div>
    </div>

     <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">

     <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img
          alt=""
          className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          src={NN_G}
          />
      </div>
    
     <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
       <div className="lg:pr-4">
         <div className="lg:max-w-lg">
           <p className="text-base/7 font-semibold text-indigo-600">Rólam</p>
           <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
             Tanulmányaim és érdeklődésem
           </h1>
           <p className="mt-6 text-xl/8 text-gray-700">
             10 éves korom óta foglalkozom programozásal, 15 éves korom óta foglalkozom az agy integrálásával az informatikába vagyis a Neurális hálózatokkal. Szeretnék Mesterséges inteligencia kutatásal vagy Neurális hálózatok kutatásával fejlesztésével foglalkozni a jövőben. 
           </p>
         </div>
       </div>
     </div>
  
     <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
       <div className="lg:pr-4">
         <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
           <p>
             Mielött mesélnék a jelenlegi projektjeimről szeretnék mesélni egy-kettő régebbiről. Mielött elmerültem az NN-ek világába foglalkoztam web programozásal is túlnyomó részt React freamworksel codoltam Type scripteben és java scriptben a stílust a Tailwind css freamworksel programoztam és persze back-endben is sokszor elmerültem amelyet mindig is jobban szeretem mint a front-endet. 12-3 éves koromban már képes voltam egy REST full web projektet csinalni adatbázisal. Sajnos ezt sosem éreztem magaménak mindig is a gyors mély programok érdekeltek ezért elis kezdtem a cyber biztonságal foglalkozni amelyben nagyon sokat számít a gyorsaság, pontosság és a biztonság ezt mindig C-ben és Assemblyben csináltam megis irtam az első kész SHA-256 függvényemet C-ben. Tudtam hogy ezzel nem szolgálok számomra fontosabb érdekeket mert a biztonságra nem lenne szükség ha az ember nem olyan lenne amilyen és tudtam hogy nem segítek a világon ezzel ezért el is kezdtem a NN-k foglalkozni amelyek a jövőt és a fejlődést szolgálják.  

           </p>
           <ul role="list" className="mt-8 space-y-8 text-gray-600">
             <li className="flex gap-x-3">
               <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
               <span>
                 <strong className="font-semibold text-gray-900">SHA-256 függvényem</strong> <a href='https://github.com/keszarmin/SHA256.git'>https://github.com/keszarmin/SHA256.git</a>
               </span>
             </li>
           </ul>
           <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Jelenlegi projektem</h2>
           <p className="mt-6">
           Jelenleg próbálom elsajátítani a Neurális hálózatok általános strukturáját és azzal építeni müködő hálózatokat. Tanulmányaimat az internetről szerzem de reménykedem késöbb lesz lehetőségem hivatalos úton is tanulni Egyetemen vagy főiskolán. Szeretnék olyan strukturákat létrehozni amelyek késöbb jobban tudnak müködni Quantum gépekel és kevesebb energiát használnak.
           </p>
         </div>
       </div>
     </div>
   </div>
 </div>
 </>
  )
}

export default A_Index