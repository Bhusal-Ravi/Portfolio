function Experience() {
  return (
    <section id="experience" className="text-white border-b border-white/35 pb-5 justify-center items-center flex flex-col mt-6 px-2">
      <div className="max-w-7xl w-full flex flex-col px-10">
        <h1 className="text-lg font-bold mb-8">Experience</h1>

        <div className="flex flex-col">

          {/* Ycotek */}
          <div className="flex flex-row gap-6">
            <div className="flex flex-col items-center">
              <div className="h-2 w-2 rounded-full bg-white mt-1.5"/>
              <div className="w-px flex-1 bg-white/20 mt-2"/>
            </div>
            <div className="pb-8 flex flex-col gap-1">
              <div className="flex flex-row gap-3 items-center">
                <img alt="Ycotek logo" loading="lazy" className="h-6 w-6 rounded-full object-cover border border-white/20" src="/ycotek_logo.jfif"/>
                <h2 className="font-bold text-sm">Ycotek</h2>
                <p className="text-xs text-white/40">2026/7/1 – Present</p>
              </div>
              <p className="text-xs text-white/60">Associate Software Engineer</p>
            </div>
          </div>

          {/* Sociair */}
          <div className="flex flex-row gap-6">
            <div className="flex flex-col items-center">
              <div className="h-2 w-2 rounded-full bg-white mt-1.5"/>
            </div>
            <div className="pb-2 flex flex-col gap-1">
              <div className="flex flex-row gap-3 items-center">
                <img alt="Sociair logo" loading="lazy" className="h-6 w-6 rounded-full object-cover border border-white/20" src="/sociair_logo.jfif"/>
                <h2 className="font-bold text-sm">Sociair</h2>
                <p className="text-xs text-white/40">2026/6/1 – 2026/6/30</p>
              </div>
              <p className="text-xs text-white/60">Software Engineer Trainee</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience