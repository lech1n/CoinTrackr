import { HiTrendingUp } from "react-icons/hi"
const TableLayout = ({mapData}) => {
  return (
    <div className="p-2 lg:p-4 bg-container-color-l dark:bg-container-color-d rounded-xl drop-shadow-lg">
      <div className="flex align-center gap-2 px-2 pt-2">
      <h1  className="dark:text-white-txt pb-6 font-bold text-base sm:text-lg lg:text-xl">Trending Coins</h1>
      <span className="text-deeppurple"><HiTrendingUp className="text-xl"/></span>
      </div>
      
      <div className="relative overflow-x-auto ">
        <table className="table-auto border-collapse w-full text-sm text-left rtl:text-right">
            <tr className="text-xs text-deeppurple uppercase bg-gray-50">
               <th className="px-3 py-2 sm:px-6 sm:py-3">#</th> 
               <th className="px-3 py-2 sm:px-6 sm:py-3">Icon</th>  
               <th className="px-3 py-2 sm:px-6 sm:py-3">Coins</th>  
               <th className="px-3 py-2 sm:px-6 sm:py-3">Prize</th>  
            </tr>
         {mapData.map((coin) => (
         <tr key={coin.id} className="dark:text-white-txt border-b  border-bg-color-l dark:border-bg-color-d cursor-pointer ">
            <td className="px-3 py-2 sm:px-6 sm:py-3">{`${coin.item.score + 1}`}</td>
            <td className="px-3 py-2 sm:px-6 sm:py-3">{<img className="w-7" src={coin.item.thumb} alt="coin-icon" />}</td>
            <td className="px-3 py-2 sm:px-6 sm:py-3"> {coin.item.name}</td>
            <td className="px-3 py-2 sm:px-6 sm:py-3">{`$${parseFloat(coin.item.data.price).toFixed(4)}`}</td>
        </tr>
        ))}
        </table>
      </div>
      </div>
  )
}

export default TableLayout
