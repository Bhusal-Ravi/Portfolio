import { X } from "lucide-react";
import {  type Dispatch, type SetStateAction } from "react";

type Props={
    setMenu: Dispatch<SetStateAction<boolean>>;
}

function Navbar_m({setMenu}:Props) {

   

  return (
  <div className='w-full min-h-dvh overflow-hidden    text-white flex justify-center items-center'>
        <button
          type="button"
          aria-label="Close menu"
          className="absolute top-5 right-5 p-2"
          onClick={() => setMenu(false)}
        >
          <X strokeWidth={1} height={50} width={50}/>
        </button>
          <ul className='flex flex-col font-thin tracking-tight justify-center items-center text-3xl gap-5'>
          <li className=''>
          <a href="#about" onClick={() => setMenu(false)}>
            About
          </a>
          </li>
           <li className=''>
          <a href="#projects" onClick={() => setMenu(false)}>
            Projects
          </a>
          </li>
           <li className=''>
          <a href="#contact" onClick={() => setMenu(false)}>
            Blogs
          </a>
          </li>
           <li className=''>
          <a href="#education" onClick={() => setMenu(false)}>
            Education
          </a>
        </li>
        </ul>
        </div>
  )
}

export default Navbar_m