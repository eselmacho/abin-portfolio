import Navbar from "@/components/Navbar"
import Ticker from "@/components/Marquee";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Navbar />
    <main className="min-h-screen flex items-center justify-center bg-neutral-100 text-black">
      <div className=" text-left px-5">
        <p className="text-7xl font-medium text-neutral-900 mb-4">
          Hi, I'm Abin,
        </p>

        <h1 className="text-7xl md:text-7xl font-medium text-neutral-900 mb-6">
          A Product Designer.
        </h1>
        <p className="text-2xl font-medium text-neutral-400">
          /Caution
        </p>
       
        <Marquee />
        
      </div>
    </main>
    </>
  )
}