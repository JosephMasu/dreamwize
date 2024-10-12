import React, { useRef } from "react";
import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Head from "next/head";
import FindProgram from "@/components/sections/FindProgram";
import HowToApply from "@/components/sections/HowToApply";
import ApplyFaster from "@/components/sections/ApplyFaster";

export default function Home() {
  const footerRef = useRef<HTMLDivElement>(null); 
  const howToApplyRef = useRef<HTMLDivElement>(null); 
  const ApplyFasterRef = useRef<HTMLDivElement>(null); 

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHowToApply = () => {
    if (howToApplyRef.current) {
      howToApplyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToApplyFaster = () => {
    if (ApplyFasterRef.current) {
      ApplyFasterRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>DreamWise</title>
        <meta property="og:site_name" content="DreamWise" />
      </Head>
      <main className="min-h-screen">
        <NavBar 
          scrollToFooter={scrollToFooter} 
          scrollToHowToApply={scrollToHowToApply} 
          scrollToApplyFaster={scrollToApplyFaster}
        />
        <Hero />
        <FindProgram />
        <div ref={howToApplyRef}>
          <HowToApply />
        </div>
        <div ref={ApplyFasterRef}>
        <ApplyFaster />
        </div>
        
        <Footer ref={footerRef} /> 
      </main>
    </>
  );
}
