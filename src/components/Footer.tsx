import SocialMedia from "./SocialMedia"


function Footer() {
  return (
    <div className="text-white  py-10 flex justify-center items-center px-10 ">
      <div className="max-w-7xl w-full flex flex-row items-center justify-between">
        <p className="text-xs text-white/40">Ravi Bhusal</p>
        <SocialMedia/>
        
      </div>
    </div>
  )
}

export default Footer
