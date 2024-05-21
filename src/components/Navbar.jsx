import { LuSearch} from "react-icons/lu"
import profile from "../assets/profile.jpg"
import { useState , useEffect } from "react"
import "@theme-toggles/react/css/Within.css"
import { Within } from "@theme-toggles/react"

const Navbar = () => {

  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark")
      setIsDarkMode(true)
    }
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      window.document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      localStorage.setItem("theme", "dark")
      window.document.documentElement.classList.add("dark")
    }
    setIsDarkMode(!isDarkMode)
  }


  return (
    <nav className="flex justify-between items-center w-full p-2 lg:p-4 bg-container-color-l dark:bg-container-color-d rounded-xl drop-shadow-lg ">
      <div className="flex-1 relative ">
        <input
          className="bg-[#f3f2f4] rounded-lg p-1 pl-8 lg:p-2 lg:pl-8 w-5/6 xl:w-4/6 text-base text-grey-txt dark:bg-bg-color-d border border-bg-color-l dark:border-container-color-d"
          type="text"
          placeholder={"Find a coin..."}
        />

        <div className="absolute top-2 left-2 lg:top-3 lg:left-3">
          <LuSearch className="text-base text-grey-txt" />
        </div>
      </div>

      <div className="flex justify-between items-center gap-5"> 

       <Within duration={750} onToggle={()=> toggleTheme()} toggled={isDarkMode} className="text-deeppurple" />

        <div className="flex justify-center item-center bg-bg-color-l dark:bg-bg-color-d rounded-2xl gap-1.5 py-1 px-2 lg:py-1.5">
        <img className="w-6 rounded-[50%]" src={profile} alt="profile img" />
        <span className="p-0 text-[14px] lg:text-[15px] text-grey-txt">Lechini</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
