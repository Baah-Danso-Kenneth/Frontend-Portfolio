import AnimatedText from "@/components/AnimatedText";
import Footer from "@/components/Footer";
import HireMe from "@/components/HireMe";
import { CircularRole, LinkArrow } from "@/components/Icon";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profileImage from '../../public/images/profile/profile_img.png';
import lightBulb from '../../public/images/profile/light_icon.svg'

export default function Home() {
  return (
    <>
    <Head>
      <title>App</title>
      <meta />
    </Head>
    <main className="flex items-center text-dark w-full min-h-screen" >
     <Layout className="pt-0">
      <div className="flex items-center justify-between w-full">
        <div className="w-1/2">
          <Image  src={profileImage} alt="kenneth"/>
        </div>

        <div className="w-1/2">
          <AnimatedText text="Turning Vision into reality with code and design"/>
          <p className="my-4 text-base font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque culpa repellat illo, suscipit explicabo molestias dolores aliquam architecto distinctio quidem ducimus molestiae repellendus? Molestiae nostrum, harum nemo cumque laboriosam minima.</p>

      <div className="flex items-center self-start mt-2">
        <Link href="/dummy.pdf" target={"_blank"} className="flex items-center bg-dark text-white px-5 py-2 border-2 border-black rounded-md hover:bg-transparent hover:text-dark ">
          Resume <LinkArrow className="w-5 h-5 ml-3"/></Link>

        <Link href="mailto:dansokenneth@gmail.com" target={"_blank"} className="ml-4 text-dark underline" >Contact</Link>
      </div>

        </div>
      </div>
     </Layout>
    </main>
    <HireMe/>

    <div className="absolute w-24 right-8 bottom-[-10%] inline-block">
      <Image src={lightBulb} alt="idea" className="w-full h-auto"/>
    </div>
    </>
  )
}
