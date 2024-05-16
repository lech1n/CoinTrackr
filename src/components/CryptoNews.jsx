import { MdOutlineKeyboardDoubleArrowUp , MdOutlineKeyboardDoubleArrowDown} from "react-icons/md"
import { useState } from "react"
import { Link } from "react-router-dom"

const CryptoNews = () => {
  const [showContent , setShowContent] = useState(false)

  const handleShowContent = () => {
    setShowContent(!showContent)
  }
  return (
    <div className="p-2 pt-4 lg:pt-6 p-2 lg:p-4 rounded-xl drop-shadow-lg h-[500px]">
    <div className="bg-crypto-light dark:bg-crypto-dark bg-cover bg-no-repeat bg-center h-64 w-full h-full p-2 flex items-end justify-center">
      <div className={`bg-glassmorphism flex flex-col items-center justify-end ${showContent ?"w-full":"w-6"} transition-all duration-200 ease-in-out`}>
      <p className="text-black-txt dark:text-white-txt py-2 cursor-pointer " 
      onClick={handleShowContent}>
       {showContent ? 
            <MdOutlineKeyboardDoubleArrowDown className="transform transition-transform duration-300 ease-in-out" /> : 
            <MdOutlineKeyboardDoubleArrowUp className="transform transition-transform duration-300 ease-in-out" />
          }
      </p>
      {showContent && (
        <div className="flex align-center justify-center flex-col text-black-txt dark:text-white-txt gap-2  w-full">
        <p className="text-center">Stay updated with the latest Crypto News</p>
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
