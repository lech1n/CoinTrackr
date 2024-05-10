import useCoinData from "./useCoinData"

const TrendingCoins = () => {
    const {isLoading, coinDataTrending} = useCoinData()
    
    if (isLoading) {
        return <div>Loading...</div>; 
      }
const topFiveTrending = coinDataTrending.coins.slice( 0 , 5 )
console.log(topFiveTrending)
  return (
    <div className="p-2 pt-4 lg:pt-6 "> 
    <div className=" p-2 lg:p-4 bg-container-color-l dark:bg-container-color-d rounded-xl drop-shadow-lg">
      <h1  className="dark:text-white-txt pb-6 font-bold text-base sm:text-lg lg:text-xl">Trending Coins</h1>
      <div className="relative overflow-x-auto ">
        <table className="dark:text-white-txt table-auto border-collapse w-full text-sm text-left rtl:text-right">
            <tr className="text-xs text-gray-700 uppercase bg-gray-50">
               <th className="px-3 py-2 sm:px-6 sm:py-3">#</th> 
               <th className="px-3 py-2 sm:px-6 sm:py-3">Icon</th>  
               <th className="px-3 py-2 sm:px-6 sm:py-3">Coins</th>  
               <th className="px-3 py-2 sm:px-6 sm:py-3">Prize</th>  
            </tr>
        {
        topFiveTrending.map((coin) => (
         <tr key={coin.item.id} className="border-b border-grey-txt dark:border-purple cursor-pointer ">
            <td className="px-3 py-2 sm:px-6 sm:py-3">{coin.item.score}</td>
            <td className="px-3 py-2 sm:px-6 sm:py-3">{<img className="w-7" src={coin.item.thumb} alt="coin-icon" />}</td>
            <td className="px-3 py-2 sm:px-6 sm:py-3"> {coin.item.name}</td>
            <td className="px-3 py-2 sm:px-6 sm:py-3">{`$${parseFloat(coin.item.data.price).toFixed(4)}`}</td>
        </tr>
        ))
        }
        </table>
      </div>
      </div>
    </div>
  )
}

export default TrendingCoins
