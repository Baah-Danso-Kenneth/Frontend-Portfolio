import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { CustomizeLinksProps } from '@/Types/types'
import { useRouter } from 'next/router'
import {TwitterIcon,GithubIcon, LinkedInIcon, DribbbleIcon,PinterestIcon} from './Icon'
import { motion } from 'framer-motion'


const CustomLink=({href,className,title}:CustomizeLinksProps)=>{ 
  const router=useRouter()
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block w-0 absolute bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  ${router.asPath === href ? "w-full" : "w-0"}`}>&nbsp;</span>
      </Link>
  )
}



function NavBar(){
  return (
    <div className=' w-full px-32 py-8 font-medium flex justify-between items-center'>
      <nav className='flex'>
        <CustomLink href="/" title="Home" className="mr-4"/>
         <CustomLink href="/about" title="About" className="mx-4"/>
         <CustomLink href="contact" title="Contacts" className="mx-4"/>
         <CustomLink href="articles" title="Articles" className="ml-4"/>
      </nav>

    <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
      <Logo/>
    </div>

      <nav className='flex justify-between items-center'>
        <motion.a href="/twitter.com" target={"_blank"}
          className="w-6 mr-3"
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
        >
          <TwitterIcon/>
          </motion.a>

        <motion.a href="/twitter.com" target={"_blank"}
          className="w-6 mx-3"
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
        >
          <GithubIcon/>
        </motion.a>

        <motion.a href="/twitter.com" target={"_blank"}
          className="w-6 mx-3"
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
        >
          <LinkedInIcon/>
          </motion.a>

        <motion.a href="/twitter.com" target={"_blank"}
          className="w-6 mx-3"
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
        >
          <PinterestIcon/>
          </motion.a>

      <motion.a href="/twitter.com" target={"_blank"}
          className="w-6 ml-3"
          whileHover={{y:-2}}
          whileTap={{scale:1}}
        >
          <DribbbleIcon/>
          </motion.a>
      </nav>
    </div>
  )
}

export default NavBar