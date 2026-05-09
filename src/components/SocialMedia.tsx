

function SocialMedia() {
  return (
    <div className="flex flex-row gap-5 border-b border-white/35 max-w-fit pb-1.5">
          <a href="https://linkedin.com/in/ravi-bhusal-832003308" target="_blank" rel="noreferrer">
            <img alt="LinkedIn profile" src="linkedin.svg" className="h-5 w-5 grayscale hover:grayscale-0 transition-all duration-200" />
          </a>
          <a href="https://github.com/Bhusal-Ravi" target="_blank" className="opacity-50 hover:opacity-100" rel="noreferrer">
            <img alt="GitHub profile" src="https://cdn.simpleicons.org/github/ffffff" className="h-5 w-5 grayscale hover:grayscale-0 transition-all duration-200" />
          </a>
          <a href="https://x.com/RaviBhusal99965" target="_blank" rel="noreferrer">
            <img alt="X profile" src="https://cdn.simpleicons.org/x/ffffff" className="opacity-50 hover:opacity-100 h-5 w-5 grayscale hover:grayscale-0 transition-all duration-200" />
          </a>
          <a href="https://www.instagram.com/bhusalravi" target="_blank" rel="noreferrer">
            <img alt="Instagram profile" src="https://cdn.simpleicons.org/instagram" className="h-5 w-5 grayscale hover:grayscale-0 transition-all duration-200" />
          </a>
        </div>
  )
}

export default SocialMedia