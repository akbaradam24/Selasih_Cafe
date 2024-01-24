'use client'

import Image from "next/image"
import ayamGeprek from "../assets/Ayam-geprek.jpg"
import bubur from "../assets/bubur.jpg"
import sosis from "../assets/sosis-bakar.jpg"
import buttonIcon from "../assets/flat-icon-removebg-preview.png"
import { useState,useRef,useEffect } from "react"
import { Transition } from '@headlessui/react'

const Carausel = () => {
    const itmesRef = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState<number>(0)
    const items = [
        {
            id: 1,
            img : ayamGeprek,
            desc: "Ayam geprek",
            buttonIcon:buttonIcon
        },
        {   
            id: 2,
            img : bubur,
            desc: "bubur",
            buttonIcon:buttonIcon
        },
        {   
            id: 3,
            img : sosis,
            desc: "sosis",
            buttonIcon:buttonIcon
        }
    ]
    const heightFix = () => {
        if (itmesRef.current && itmesRef.current.parentElement) itmesRef.current.parentElement.style.height = `${itmesRef.current.clientHeight}px`
      }
    
      useEffect(() => {
        heightFix()
      }, [])  
    return (
        <>
            <div className="w-full max-w-5xl mx-auto text-center">
      {/* Item image */}
      <div className="transition-all duration-150 delay-300 ease-in-out">
        <div className="relative flex flex-col px-5">

          {items.map((item, index) => (
             <Transition
             key={index}
             show={active === index}
             enter="transition ease-in-out duration-500 delay-200 order-first"
             enterFrom="opacity-0 scale-105"
             enterTo="opacity-100 scale-100"
             leave="transition ease-in-out duration-300 absolute"
             leaveFrom="opacity-100 scale-100"
             leaveTo="opacity-0 scale-95"
           >
             <Image className="rounded-xl " src={item.img} width={1024} height={576} alt={item.desc} />
           </Transition>
          ))}

        </div>
      </div>
      {/* Buttons */}
      {/* <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {items.map((item, index) => (
          <button
            key={index}
            className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
            onClick={() => { setActive(index) }}
          >
            <span className="text-center flex flex-col items-center">
              <span className="flex items-center justify-center relative w-9 h-9 rounded-full bg-indigo-100 mb-2">
                
                <Image src={item.buttonIcon} alt={item.desc} />
              </span>
              <span className="block text-sm font-medium text-slate-900 mb-2">{item.desc}</span>
              <span className="block relative w-full bg-slate-200 h-1 rounded-full" role="progressbar" aria-valuenow={0}>
                <span className="absolute inset-0 bg-indigo-500 rounded-[inherit]" style={{ width: '0%' }}></span>
              </span>
            </span>
          </button>
        ))}
      </div> */}
    </div>
        </>
    )

}


export default  Carausel