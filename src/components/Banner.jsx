import React from 'react'
import { motion } from "motion/react"
import developer1 from '../assets/images/developer1.jpg'
import developer2 from '../assets/images/developer2.jpg'
import { info } from 'autoprefixer'

const Banner = () => {
    return (
        <>
            <div className="hero max-w-screen-lg mx-auto min-h-[100vh-308px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                    <motion.img
                        src={developer1}
                        animate={{y:[50,80,50]}}
                        transition={{repeat:Infinity,duration:5}}
                        className="max-w-sm w-80 rounded-lg shadow-2xl rounded-t-[50px] rounded-br-[50px] border-b-8 border-l-8 border-lime-600" />
                    <motion.img
                        src={developer2}
                        animate={{x:[100,130,100]}}
                        transition={{repeat:Infinity,duration:5}}
                        className="max-w-sm w-80 rounded-lg shadow-2xl rounded-t-[50px] rounded-br-[50px] border-b-8 border-l-8 border-lime-600" />
                    </div>
                    <div className='flex-1'>
                        <motion.h1 animate={{x:[0,50,0]}} transition={{duration:5,repeat:Infinity}} className="text-5xl font-bold">Latest <motion.span 
                        transition={{duration:1.5, repeat:Infinity}}
                        animate={{color: ['#1cf0ec','#8cf01c','#f74f14']}}
                         >Jobs</motion.span> New!</motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner