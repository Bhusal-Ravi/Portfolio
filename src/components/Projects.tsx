import { MoveUpRight } from "lucide-react"
import { projectInfo } from "./project_info.ts"

function handleSpotlightMove(e: React.MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`)
}

function Projects() {
  return (
    <div>
      <h1 className="text-lg font-bold mb-5">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectInfo.map((project) => (
          <div
            key={project.name}
            onMouseMove={handleSpotlightMove}
            className="relative group border border-white/35 rounded-md p-4 flex flex-col gap-3"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.06), transparent 70%)" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-md p-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 [-webkit-mask:linear-gradient(#fff_0_0)_content-box,-webkit-linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]"
              style={{ background: "radial-gradient(160px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.45), transparent 70%)" }}
            />

            <div className=" ">
            {project.image&& <img alt={`Screenshot of ${project.name}`} loading="lazy" decoding="async" className="object-cover group-hover:scale-102 transform-all duration-200 ease-in-out w-full h-30 md:h-45 lg:h-55" src={`${project.image}`}/>}
            </div>

            <div className="flex flex-row items-center justify-between">
              <h2 className="font-bold text-sm">{project.name}</h2>
              <p className="text-xs text-white/50">
                {project.badge ?? "Project"}
              </p>
            </div>



            {project.hook && (
              <p className="text-xs italic text-white/40">“{project.hook}”</p>
            )}

            <p className="text-sm text-white/70 tracking-tight">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-white/35 px-2 py-0.5 rounded-sm text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-row flex-wrap justify-end gap-3 pt-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs flex flex-row justify-center items-center font-semibold border border-white px-3 py-1 rounded-sm hover:bg-white hover:text-black transition-colors"
                >
                  Live
                  <MoveUpRight className="ml-2" height={20} strokeWidth={1.5}/>
                </a>
              )}

              {"video" in project && project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs flex flex-row justify-center items-center border border-white/35 px-3 py-1 rounded-sm hover:bg-white/10 transition-colors"
                >
                  Video
                  <MoveUpRight className="ml-2" height={20} strokeWidth={1.5}/>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs flex flex-row justify-center items-center border border-white/35 px-3 py-1 rounded-sm hover:bg-white/10 transition-colors"
                >
                  GitHub

                  <MoveUpRight className="ml-2" height={20} strokeWidth={1.5}/>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects