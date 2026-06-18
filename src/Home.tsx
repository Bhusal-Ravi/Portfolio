import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Navbar_m from "./components/Navbar_m"
import { Menu } from "lucide-react"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import SocialMedia from "./components/SocialMedia"
import Experience from "./components/Experience"

let lastVisitRequestAt = 0

function Home() {
  const [menu,setMenu]= useState(false)
  const [visitCount, setVisitCount] = useState<number | null>(null)
  const [visitError, setVisitError] = useState<string | null>(null)
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? 'https://portfolio-6nt7.onrender.com'
  const siteId = 'bhusalravi.com.np'
  
  const frontend: string[] = ['React','JavaScript', 'TypeScript', 'TailwindCSS', 'Vite', 'Framer'];

  const backend: string[] = ['Node.js', 'Express', 'Socket.io', 'BullMQ', 'Docker', 'GitHub Actions', 'Vercel', 'Render'];

  const database: string[] = ['PostgreSQL', 'MongoDB', 'Redis', 'Pinecone'];

  const aiTools: string[] = ['LangChain', 'LangGraph', 'Voyage AI', 'Tavily','Groq'];

  const authSecurity: string[] = ['JsonWebTokens','Ngrok', 'Betterautth'];

   function onImageError(item:string,e: React.SyntheticEvent<HTMLImageElement>){
      e.currentTarget.src=`${item.toLowerCase().replace(/\s+/g, '')}.svg`
      e.currentTarget.onerror = null; 
    }

    function handleProfileMouseEnter(e: React.SyntheticEvent<HTMLImageElement>){
      if(e.currentTarget.src.endsWith('profile_V3.webp')){
        e.currentTarget.src='profile_V1.webp'
      }else {
         e.currentTarget.src='profile_V3.webp'
      }
      
      e.currentTarget.onerror = null; 
    }


  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

   

    return () => document.body.classList.remove("overflow-hidden");
  }, [menu]);

  useEffect(() => {
    const runVisitCounter = async () => {
      try {
        const now = Date.now()

        if (now - lastVisitRequestAt < 1000) {
          return
        }

        lastVisitRequestAt = now

        const response = await fetch(`${apiBaseUrl}/visit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ siteId }),
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data?.error ?? 'Failed to record visit')
        }

        setVisitCount(data.visitCount)
        setVisitError(null)
      } catch (error) {
        setVisitError(error instanceof Error ? error.message : 'Failed to record visit')
      }
    }

    void runVisitCounter()
  }, [])

  return <div className="  ">
    {/* Navbar */}
    <section >
      <div className="hidden border  md:block">
        <Navbar/>
      </div>
      
      <div className="flex md:hidden justify-center items-center px-5 py-2 border-b border-white/35 ">
      {menu?<div >
        <Navbar_m setMenu={setMenu}/>
      </div>:<div className="flex border   w-full group relative transition-all duration-200 ease-in-out justify-center items-center"><img alt="Ravi Bhusal portfolio logo" loading="lazy"  className="h-12 w-16 z-20 mr-auto" src="logo_white_R.svg"/><img alt="" loading="lazy"  className="h-12 transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 absolute inset-0 group-hover:translate-x-8  z-10  w-16  mr-auto" src="logo_yellow_A.svg"/><img alt="" loading="lazy"  className="h-12 z-5 transition-all duration-200 opacity-0 group-hover:opacity-100 ease-in-out absolute inset-0 group-hover:translate-x-16 w-16 mr-auto" src="logo_blue_V.svg"/><img alt="" loading="lazy"  className="h-12 z-5 transition-all duration-200 opacity-0 group-hover:opacity-100 ease-in-out absolute inset-0 group-hover:translate-x-24 w-16 mr-auto" src="logo_I.svg"/><button className="ml-auto" onClick={()=>setMenu(true)} aria-label="Open menu"><Menu className="text-white"/></button></div>
      }
      </div>
      
        
    </section>

      {/* About */}
      <section id="about" className="text-white  border-b border-white/35 pb-5 justify-center items-center  flex flex-col mt-6 px-2 ">
        <div className=" flex flex-row px-10 max-w-7xl   ">
          
          
          <div className=" justify-center items-center ">
            {/* <img loading="lazy" className="md:hidden mb-5 opacity-40  object-cover h-20 w-full border-white shadow-white/80 shadow-2xl border  rounded-md md:h-50 md:w-80  transition-all ease-in-out duration-200    " src="profile_V3.webp"/> */}
                    <video className="md:hidden z-0 mb-5 opacity-90  object-cover h-20 w-full border-white shadow-[#2F73AF] shadow-xl  border border-b-0   rounded-md md:h-50 md:w-80  transition-all ease-in-out duration-200" autoPlay loop muted playsInline preload="metadata" poster="/profile_V3.webp">
                      <source src="/scenary.webm" type="video/webm" />
                    </video>
          <div>
          <div>
            <h1 className="text-lg font-bold z-10 mb-2 flex">
  {["R", "A", "V", "I", " ", "B", "H", "U", "S", "A", "L", " ", ",", " ", "2", "2"].map((char, i) => (
    <span
      key={i}
      className={`inline-block transition-transform duration-150 hover:scale-150 cursor-default ${char === " " ? "w-[0.4em]" : ""}`}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</h1>
            <SocialMedia/>
          </div>
          <p className="alin-text-bottom text-md mt-5 tracking-tighter">
            <span className="font-bold">I'm Ravi </span>, a software engineer from Kathmandu. I build web apps, APIs, and backend systems and occasionally go down rabbit holes with distributed systems and AI pipelines.
            Always shipping something.
           
          </p>
            <p className="alin-text-bottom text-md mt-2 ">
            <span className="font-bold">Open To Work</span>: Full-Time, Freelance.<span className="font-bold">Let's Talk</span>
          </p>
           <p className="border-[0.5px] group flex justify-center items-center gap-2 font-mono text-sm bg-white/5 border-white/50  max-w-fit px-2 py-1 rounded-sm mt-1"><img className="h-5 grayscale-100 transition-all duration-100 group-hover:grayscale-0  w-5" src="/gmail.svg"/>ravibh2003@gmail.com</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-2 text-xs text-white/80">
              <span className="font-semibold">Page visits</span>
              <span>{visitCount === null ? 'Loading...' : visitCount}</span>
            </p>
            {visitError ? (
              <p className="mt-2 text-xs text-red-300">{visitError}</p>
            ) : null}
          </div>
          </div>

          <div className="hidden md:block  max-h-fit max-w-fit   -rotate-5 group hover:rotate-0  transition-all ease-in-out duration-200   bg-white rounded-lg ">
            <img alt="Portrait of Ravi Bhusal" loading="lazy" onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseEnter} className="object-cover h-30 w-100 border border-black hover:border-2  hover:border-white   rounded-md md:h-50 md:w-80 rotate-4 transition-all ease-in-out duration-200 group-hover:rotate-0  " src="profile_V1.webp"/>
          </div>
          </div>
        
      </section>

      {/* Experience */}
        <Experience/>
      {/* skills */}
      <section id="skills" className="text-white border-b border-white/35 pb-5 justify-center items-center   flex flex-col mt-6 px-2 ">
        <div className="max-w-7xl w-full flex flex-col px-10     ">
          <h1 className="text-lg font-bold mr-auto">Tech Stack</h1>

            <div className="mt-5 mr-auto">
              <h1 className="flex flex-row font-semibold text-sm tracking-wide   ">FrontEnd : </h1>
              <div className="flex flex-wrap mt-2 gap-2  items-center">{frontend.map((item)=>(<div className="bg-white flex flex-row relative justify-center items-center px-2 py-1 group  rounded-lg" key={item}><p className="font-bold absolute hidden group-hover:flex -translate-y-10  bg-white py-2 px-5 rounded-md wrap-break-word  whitespace-normal  justify-center items-center   text-black text-xs">{item}</p><img alt={`${item} logo`} loading="lazy" onError={(e)=>onImageError(item,e)} className="object-cover h-5 w-5 "  src={`https://cdn.simpleicons.org/${item.replace(/\s+/g, '').toLowerCase()}`}/></div>))} </div>
            </div>

             <div className="mt-5 mr-auto">
              <h1 className="flex flex-row font-semibold text-sm tracking-wide  ">BackEnd : </h1>
              <div className="flex flex-wrap mt-2 gap-2  items-center">{backend.map((item)=>(<div className="bg-white flex flex-row relative justify-center items-center px-2 py-1 group  rounded-lg" key={item}><p className="font-bold absolute hidden group-hover:flex -translate-y-10  bg-white py-2 px-5 rounded-md wrap-break-word  whitespace-normal  justify-center items-center   text-black text-xs">{item}</p><img alt={`${item} logo`} loading="lazy" onError={(e)=>onImageError(item,e)} className="object-cover h-5 w-5 "  src={`https://cdn.simpleicons.org/${item.replace(/\s+/g, '').toLowerCase()}`}/></div>))} </div>
            </div>

             <div className="mt-5 mr-auto">
              <h1 className="flex flex-row font-semibold text-sm tracking-wide   ">Database : </h1>
              <div className="flex flex-wrap mt-2 gap-2  items-center">{database.map((item)=>(<div className="bg-white flex flex-row relative justify-center items-center px-2 py-1 group  rounded-lg" key={item}><p className="font-bold absolute hidden group-hover:flex -translate-y-10  bg-white py-2 px-5 rounded-md wrap-break-word  whitespace-normal  justify-center items-center   text-black text-xs">{item}</p><img alt={`${item} logo`} loading="lazy" onError={(e)=>onImageError(item,e)} className="object-cover h-5 w-5 "  src={`https://cdn.simpleicons.org/${item.replace(/\s+/g, '').toLowerCase()}`}/></div>))} </div>
            </div>

             <div className="mt-5 mr-auto">
              <h1 className="flex flex-row font-semibold text-sm tracking-wide   ">Ai Tools : </h1>
              <div className="flex flex-wrap mt-2 gap-2  items-center">{aiTools.map((item)=>(<div className="bg-white flex flex-row relative justify-center items-center px-2 py-1 group  rounded-lg" key={item}><p className="font-bold absolute hidden group-hover:flex -translate-y-10  bg-white py-2 px-5 rounded-md wrap-break-word  whitespace-normal  justify-center items-center   text-black text-xs">{item}</p><img alt={`${item} logo`} loading="lazy" onError={(e)=>onImageError(item,e)} className="object-cover h-5 w-5 "  src={`https://cdn.simpleicons.org/${item.replace(/\s+/g, '').toLowerCase()}`}/></div>))} </div>
            </div>

             <div className="mt-5 mr-auto">
              <h1 className="flex flex-row font-semibold text-sm tracking-wide  ">Auth / Security : </h1>
              <div className="flex flex-wrap mt-2 gap-2  items-center">{authSecurity.map((item)=>(<div className="bg-white flex flex-row relative justify-center items-center px-2 py-1 group  rounded-lg" key={item}><p className="font-bold absolute hidden group-hover:flex -translate-y-10  bg-white py-2 px-5 rounded-md wrap-break-word  whitespace-normal  justify-center items-center   text-black text-xs">{item}</p><img alt={`${item} logo`} loading="lazy" onError={(e)=>onImageError(item,e)} className="object-cover h-5 w-5  "  src={`https://cdn.simpleicons.org/${item.replace(/\s+/g, '').toLowerCase()}`}/></div>))} </div>
            </div>

          </div>
        
      </section>

      {/* Projects */}
      <section id="projects" className="text-white border-b border-white/35 pb-5 justify-center items-center   flex flex-col mt-6 px-2 ">
        <div className="max-w-7xl w-full flex flex-col px-10     ">

            <Projects/>

          </div>
        
      </section>

    {/* Education */}
<section id="education" className="text-white border-b border-white/35 pb-5 justify-center items-center flex flex-col mt-6 px-2">
  <div className="max-w-7xl w-full flex flex-col px-10">
    <h1 className="text-lg font-bold mb-8">Education</h1>

    <div className="flex flex-col">

      {/* BCT */}
      <div className="flex flex-row gap-6">
        <div className="flex flex-col items-center">
          <div className="h-2 w-2 rounded-full bg-white mt-1.5"/>
          <div className="w-px flex-1 bg-white/20 mt-2"/>
        </div>
        <div className="pb-8 flex flex-col gap-1">
          <div className="flex flex-row gap-3 items-center">
            <h2 className="font-bold text-sm">Bachelor in Computer Engineering</h2>
            <p className="text-xs text-white/40">2021 – 2026</p>
          </div>
          <p className="text-xs text-white/60">Kathmandu Engineering College, Tribhuvan University</p>
          <p className="text-xs text-white/40">~81% aggregate</p>
        </div>
      </div>

      {/* +2 */}
      <div className="flex flex-row gap-6">
        <div className="flex flex-col items-center">
          <div className="h-2 w-2 rounded-full bg-white mt-1.5"/>
          <div className="w-px flex-1 bg-white/20 mt-2"/>
        </div>
        <div className="pb-8 flex flex-col gap-1">
          <div className="flex flex-row gap-3 items-center">
            <h2 className="font-bold text-sm">Higher Secondary (Science)</h2>
            <p className="text-xs text-white/40">2019 – 2021</p>
          </div>
          <p className="text-xs text-white/60">Kathmandu Model College</p>
          <p className="text-xs text-white/40">Grade 11: 3.81 &nbsp;·&nbsp; Grade 12: 3.60</p>
        </div>
      </div>

      {/* School */}
      <div className="flex flex-row gap-6">
        <div className="flex flex-col items-center">
          <div className="h-2 w-2 rounded-full bg-white mt-1.5"/>
        </div>
        <div className="pb-2 flex flex-col gap-1">
          <div className="flex flex-row gap-3 items-center">
            <h2 className="font-bold text-sm">School</h2>
            <p className="text-xs text-white/40">– 2019</p>
          </div>
          <p className="text-xs text-white/60">Learning Realm International</p>
          <p className="text-xs text-white/40">GPA: 3.65</p>
        </div>
      </div>

    </div>
  </div>
</section>

<section id="contact" className="text-white border-b border-white/35 pb-5 justify-center items-center flex flex-col mt-6 px-2">
  <div className="max-w-7xl w-full flex flex-col px-10">
    <Footer/>
   </div>
</section>

  </div>
}

export default Home