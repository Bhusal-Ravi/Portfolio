

function Navbar() {
  return (
    <div className='py-5 border-b px-10   flex justify-center items-center text-white border-white/35'>
       <div className='w-full  flex items-center max-w-7xl   justify-center'>
       <div className="flex  mr-1 w-full group relative transition-all duration-200 ease-in-out justify-center items-center"><img  className="h-15 w-20 z-20 mr-auto" src="logo_white.svg"/><img  className="h-15 transition-all duration-200 ease-in-out absolute inset-0 group-hover:translate-x-12  z-10  w-20  mr-auto" src="logo_yellow.svg"/><img  className="h-15 z-5 transition-all duration-200 ease-in-out absolute inset-0 group-hover:translate-x-24 w-20 mr-auto" src="logo_blue.svg"/></div>
        <div className='ml-auto'>
        
          <ul className='flex flex-row gap-8 text-sm'>
          <li className=''>
          <a className="opacity-50 hover:opacity-100" href="#about">
            About
          </a>
          </li>
           <li className=''>
          <a className="opacity-50 hover:opacity-100" href="#projects">
            Projects
          </a>
          </li>
           <li className=''>
          <a className="opacity-50 hover:opacity-100" href="#contact">
            Blogs
          </a>
          </li>
           <li className=''>
          <a className="opacity-50 hover:opacity-100" href="#education">
            Education
          </a>
        </li>
        
        <li className=''>
          <a className="opacity-50 hover:opacity-100" target="_blank" rel="noopener noreferrer"  href="https://drive.google.com/file/d/1rO2zLvt86UNo5ZKcUwZse66EAJsnj-i6/view?usp=drive_link">
            Resume
          </a>
        </li>
        </ul>
        </div>
        </div>
        
    </div>
  )
}

export default Navbar