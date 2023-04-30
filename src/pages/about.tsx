import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React,{useEffect, useRef} from 'react'
import Image from 'next/image'
import DansoImage from '../../public/images/profile/danso.svg';
import {useMotionValue,useSpring,useInView} from 'framer-motion';
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

const AnimatedNumbers=({value}:any)=>{
  const ref=useRef(null);
  const motionValue=useMotionValue(0)
  const springValue=useSpring(motionValue,{duration:3000})
  const isInView = useInView(ref,{once:true})

  useEffect(()=>{
    if(isInView){
      motionValue.set(value)
    }
  },[isInView,value,motionValue])

  useEffect(()=>{
    springValue.on("change",(latest)=>{
     if(ref.current && latest.toFixed(0) <=value){
        //@ts-ignore
        ref.current.textContent=latest.toFixed(0)
     }
    })
  },[springValue,value])

  return <span ref={ref}></span>
}

function about() {
  return (
   <>
   <Head>
    <title>Incredible Dev | About Page</title>
    <meta name="description" content='about page'/>
   </Head>

   <main className='flex w-full flex-col items-center justify-center'>
    <Layout className='pt-16'>
      <AnimatedText className='mb-16 px-32 text-2xl'text="Passion Fuels Purpose!"/>
      <div className='grid w-full grid-cols-8 gap-16 '>
         <div className='flex col-span-3 flex-col items-start  justify-start'>
          <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
          <p className='font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur saepe debitis quaerat quam delectus possimus voluptatum amet vero officia. Tenetur?</p>

          <p className='font-medium my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur saepe debitis quaerat quam delectus possimus voluptatum amet vero officia. Tenetur?</p>

          <p className='font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur saepe debitis quaerat quam delectus possimus voluptatum amet vero officia. Tenetur?</p>
         </div>

         <div className='col-span-3 h-max relative rounded-2xl border-4 border-solid border-dark p-8 bg-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
            <Image src={DansoImage} alt="danso" className='w-full h-auto rounded-2xl border-2 '/>
         </div>

         <div className='col-span-2 flex flex-col items-end justify-between'>

            <div className='flex flex-col items-end justify-center'>
              <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value="50"/>+
              </span>
              <h2 className='text-lg font-medium capitalize text-dark/75'>Satisfied Clients</h2>
            </div>

            <div className='flex flex-col items-end justify-center'>
            <span className='inline-block text-7xl font-bold'>
            <AnimatedNumbers value="40+"/>+
              </span>
              <h2 className='text-lg font-medium capitalize text-dark/75'>projects completed</h2>
            </div>

            <div className='flex flex-col items-end justify-center'>
            <span className='inline-block text-7xl font-bold'>
            <AnimatedNumbers value="4"/>+
              </span>
              <h2 className=' text-lg font-medium capitalize text-dark/75 '>years of experience</h2>
            </div>

         </div>

      </div>
    <Skills/>
    <Experience/>
    </Layout>
   </main>
   </>
  )
}

export default about
