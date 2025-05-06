"use client"

import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  const imageRef = useRef(null)

  useEffect(()=>{
    const imageElement = imageRef.current

    const handleScroll = ()=>{
      const scrollPositon = window.scrollY
      const scrollThreshold = 100
      console.log("scrollposition: ", scrollPositon)
  
      if(scrollPositon > scrollThreshold){
        imageElement.classList.add("scrolled")
      }
      else{
        imageElement.classList.remove("scrolled")
      }
    }

    window.addEventListener("scroll", handleScroll)

    return ()=> window.removeEventListener("scroll", handleScroll)
    
  }, [])
  return (
    <section className="pt-36 md:pt-48 pb-10 w-full mb-20">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="gradient-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview prep, and AI-powered tools for job success
          </p>
        </div>

        <div className="flex justify-center space-x-4">
            <Link href='/dashboard'>
                <Button size='lg' className='px-8'>Get Started</Button>
            </Link>
            
        </div>


        <div className="mt-5 md:mt-0 hero-image-wrapper">
            <div ref={imageRef} className="hero-image">
                <Image src="/logo2.png" width={1280} height={720} alt="dashboard" className="rounded-lg shadow-2xl mx-auto border" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
