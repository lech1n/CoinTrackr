import { MdOutlineKeyboardDoubleArrowUp , MdOutlineKeyboardDoubleArrowDown} from "react-icons/md"
import { useState } from "react"
import { Link } from "react-router-dom"

const CryptoNews = () => {
  const [showContent , setShowContent] = useState(false)

  const handleShowContent = () => {
    setShowContent(!showContent)
  }
  return (
    <div className="p-2 pt-4 lg:pt-6 p-2 lg:p-4 rounded-xl drop-shadow-lg h-[400px] 2xl:h-2/4 w-full">
    <div className="bg-crypto-light dark:bg-crypto-dark bg-cover bg-no-repeat bg-center h-64 w-full h-full p-2 flex items-end justify-center">
      <div className={`bg-glassmorphism flex flex-col items-center justify-end ${showContent ?"w-4/5":"w-6"} transition-all duration-300 ease-in-out`}>
      <p className="text-black-txt dark:text-white-txt py-2 cursor-pointer " 
      onClick={handleShowContent}>
       {showContent ? 
            <MdOutlineKeyboardDoubleArrowDown className="transform transition-transform duration-300 ease-in-out" /> : 
            <MdOutlineKeyboardDoubleArrowUp className="transform transition-transform duration-300 ease-in-out" />
          }
      </p>
      {showContent && (
        <div className="flex align-center justify-center flex-col text-black-txt dark:text-white-txt gap-2 p-2 w-4/5">
        <p className="text-center text-sm sm:text-base">Stay updated with the latest Crypto News</p>
        <Link to={`/news`} className="w-full">
        <button className="bg-deeppurple p-2 text-white-txt w-full rounded-md hover:opacity-70">Read More</button>
        </Link>
        </div>
      )}
      </div>
    </div>
    </div>
  )
}

export default CryptoNews
