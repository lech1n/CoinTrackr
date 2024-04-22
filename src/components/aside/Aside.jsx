import { NavLink } from "react-router-dom"
import { CiHome , CiWallet} from "react-icons/ci"
import { PiNewspaperClippingLight , PiChartLineUpLight } from "react-icons/pi"
import { BsGear } from "react-icons/bs"
import logo from "../../assets/logo.png"
import illustration from "../../assets/illustration.svg"

const Aside = () => {

  return (
    <aside className="flex flex-col items-center justify-between xl:justify-around h-full p-2 lg:p-3 bg-container-color-l  rounded-xl drop-shadow-lg min-h-[250px]">
     <div className="flex items-center gap-2 p-4 border-b-[1px] border-bg-color-l">
      <img className="w-8 min-w-7 sm:min-w-8" src={logo} alt="logo"/>
      <h1 className="text-deeppurple drop-shadow-lg font-bold hidden xl:inline-flex text-xl">CoinTracr.</h1>
      </div> 
     <div className="flex flex-col  justify-around h-2/5 xl:justify-center xl:h-full flex-1 gap-4 ">

      <NavLink to="/">
      <div className="flex items-center justify-center xl:justify-start gap-4 lg:px-4 lg:py-2 w-full">
       <CiHome className="iconsss text-black-txt text-lg"/>
       <h3 className=" hidden xl:inline-flex">Dashboard</h3>
      </div>
      </NavLink>

      <NavLink to="/portofolio">
      <div className="flex items-center justify-center xl:justify-start gap-4 lg:px-4 lg:py-2 w-full">
       <CiWallet className="iconsss text-black-txt text-lg " />
      <h3 className="hidden xl:inline-flex">Portofolio</h3>
      </div>
      </NavLink>

      <NavLink to="/market">
      <div className="flex items-center justify-center xl:justify-start gap-4 lg:px-4 lg:py-2 w-full">
        <PiChartLineUpLight className="iconsss text-black-txt text-lg"/>
      <h3 className="hidden xl:inline-flex">Market Cap</h3>
      </div>
      </NavLink>

      <NavLink to="/news">
      <div className="flex items-center justify-center xl:justify-start gap-4 lg:px-4 lg:py-2 w-full">
        <PiNewspaperClippingLight className="iconsss text-black-txt text-lg "/>
      <h3 className="hidden xl:inline-flex">News</h3>
      </div>
      </NavLink>

      <NavLink to="/settings">
      <div className="flex items-center justify-center xl:justify-start gap-4 lg:px-4 lg:py-2 w-full">
        <BsGear className="iconsss text-black-txt text-lg" />
      <h3 className="hidden xl:inline-flex">Settings</h3>
      </div>
      </NavLink>

      </div> 
      
      <div className="w-full ">
      <img className="w-full hidden xl:inline-flex" src={illustration} alt="crypto illustration"/>
      </div>
    </aside>
  )
}

export default Aside
