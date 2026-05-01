import { X } from "lucide-react";
import {  type Dispatch, type SetStateAction } from "react";

type Props={
    setMenu: Dispatch<SetStateAction<boolean>>;
}

function Navbar_m({setMenu}:Props) {

   

  return (
  <div className='w-full min-h-dvh     text-white flex justify-center items-center'>
        <button
          type="button"
          aria-label="Close menu"
          className="absolute top-5 right-5 p-2"
          onClick={() => setMenu(false)}
        >
          <X strokeWidth={1} height={50} width={50}/>
        </button>
          <ul className='flex flex-col  font-thin tracking-tight justify-center items-center text-3xl gap-5'>
          <li className=''>
          <a href="#about"  onClick={() => setMenu(false)}>
           <p className="hover:scale-110 ease-in-out transition-all">About</p> 
          </a>
          </li>
           <li className=''>
          <a href="#projects" onClick={() => setMenu(false)}>
            <p className="hover:scale-110 ease-in-out transition-all">Projects</p> 
          </a>
          </li>
           <li className=''>
          <a href="#contact" onClick={() => setMenu(false)}>
            <p className="hover:scale-110 ease-in-out transition-all">Blogs</p> 
          </a>
          </li>
           <li className=''>
          <a href="#education" onClick={() => setMenu(false)}>
            <p className="hover:scale-110 ease-in-out transition-all">Education</p> 
          </a>
        </li>
         <li className=''>
          <a href="https://drive.google.com/file/d/1rO2zLvt86UNo5ZKcUwZse66EAJsnj-i6/view?usp=drive_link" onClick={() => setMenu(false)}>
           <p className="hover:scale-110 ease-in-out transition-all">Resume</p> 
          </a>
        </li>
        </ul>
        </div>
  )
}

export default Navbar_m