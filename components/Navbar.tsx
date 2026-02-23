export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 text-white">
      
      <div className="text-sm sm:text-xl font-medium text-neutral-400">
        ABIN S L
      </div>

      <div className="space-x-8 text-lg text-neutral-400">
        {/*
        <a href="#" className="hover:text-neutral-700 transition-colors">
          Work
        </a>
        <a href="#" className="hover:text-neutral-700 transition-colors">
          About
        </a>
        */}

        <a href="#" className="text-sm sm:text-xl hover:text-neutral-700 transition-colors">
          Connect
        </a>
      </div>

    </nav>
  )
}