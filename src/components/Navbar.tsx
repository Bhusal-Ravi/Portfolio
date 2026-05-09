

function Navbar() {
  return (
    <div className='py-5 border-b px-10   flex justify-center items-center text-white border-white/35'>
       <div className='w-full  flex items-center max-w-7xl   justify-center'>
       <div className="flex  mr-1 w-full group relative transition-all duration-200 ease-in-out justify-center items-center"><img alt="Ravi Bhusal portfolio logo" className="h-12 w-16 z-20 mr-auto" src="logo_white_R.svg"/><img alt="" className="h-12 transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 absolute inset-0 group-hover:translate-x-8  z-10  w-16  mr-auto" src="logo_yellow_A.svg"/><img alt="" className="h-12 z-5 transition-all duration-200 opacity-0 group-hover:opacity-100 ease-in-out absolute inset-0 group-hover:translate-x-16 w-16 mr-auto" src="logo_blue_V.svg"/><img alt="" className="h-12 z-5 transition-all duration-200 opacity-0 group-hover:opacity-100 ease-in-out absolute inset-0 group-hover:translate-x-24 w-16 mr-auto" src="logo_I.svg"/></div>
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