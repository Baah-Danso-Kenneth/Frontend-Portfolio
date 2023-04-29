import { SkillProps } from '@/Types/types'
import React from 'react'
import { animate, motion } from 'framer-motion'

const Skill=({text,x,y}:SkillProps)=>{
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-3 shadow-dark cursor-pointer'
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y}}
    transition={{duration:1.05}}
    viewport={{once:true}}
    >
      {text}
    </motion.div>
  )
}
function Skills() {
  return (
    <>
      <h2 className='font-bold text-8xl mt-20 w-full text-center'>Skills</h2>
     <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
         {/* <motion.div className='flex items-center justify-center  p-8 bg-dark shadow-dark text-white rounded-full' whileHover={{scale:1.05}}>Web</motion.div> */}

         <Skill text="HTML" x='-10vw' y='2vw'/>
         <Skill text="CSS" x='8vw' y='-10vw'/>
         <Skill text="Javascript" x='20vw' y='8vw'/>
         <Skill text="React.js" x='0vw' y='15vw'/>
         <Skill text="Next.js" x='-20vw' y='-15vw'/>
         <Skill text="Gatsbyjs" x='15vw' y='-12vw'/>
         <Skill text="Web Design" x='25vw' y='-3vw'/>
         <Skill text="Figma" x='-15vw' y='-20vw'/>
         <Skill text="Firebase" x='-25vw' y='20vw'/>
         <Skill text="Tailwind css" x='3vw' y='8vw'/>

     
     

    </div>
    </>
  )
}

export default Skills
