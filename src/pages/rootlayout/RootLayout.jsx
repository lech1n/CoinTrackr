import "./RootLayout.css"
import { Outlet } from "react-router-dom"
import Aside from "../../components/aside/Aside"

const RootLayout = () => {
  return (
    <div className="rootlayout_container relative text-black-txt  h-dvh w-dvh min-h-[250px] min-w-[250px]">
      <div className="fixed m-2 lg:m-3 xl:m-4" >
       <Aside />
      </div>
      <div className="outlet">
      <Outlet />
      </div>
     </div>
  )
}

export default RootLayout
