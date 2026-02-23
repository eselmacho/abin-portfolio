import Navbar from "@/components/Navbar"

import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Navbar />
    <main className=" min-h-screen flex items-center justify-center bg-neutral-100 text-black md:pt-0">
      <div className=" w-full max-w-xl md:max-w-4xl text-center md:text-left px-6">
        <p className="text-3xl sm:text-5xl md:text-7xl  font-medium text-neutral-900 leading-tight mb-3">
          Hi, I'm Abin,
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-medium text-neutral-900 leading-tight mb-8">
          A Product Designer.
        </h1>
        <p className="text-base sm:text-xl font-medium text-neutral-400 mb-2">
          /Caution.
        </p>
       
        <div className="w-full md:max-w-[700px]">
          <Marquee />
          </div>
        
      </div>
    </main>
    </>
  )
}