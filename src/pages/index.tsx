
import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Head from "next/head";
import FindProgram from "@/components/sections/FindProgram";
import HowToApply from "@/components/sections/HowToApply";
import ApplyFaster from "@/components/sections/ApplyFaster";
export default function Home() {
  return (
    <>
      <Head>
        <title>DreamWise</title>
        <meta property="og:site_name" content="DreamWise" />

      </Head>
      <main className="min-h-screen">
        <NavBar />
        <Hero />
        <FindProgram/>
        <HowToApply />
        <ApplyFaster />
        <Footer />
      </main>
    </>
  );
}
