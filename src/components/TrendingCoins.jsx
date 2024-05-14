import useCoinData from "./useCoinData";
import TableLayout from "./TableLayout";

const TrendingCoins = () => {
    const {isLoading, coinDataTrending} = useCoinData()
    
    if (isLoading) {
        return <div>Loading...</div>; 
      }
const topFiveTrending = coinDataTrending.coins.slice( 0 , 5 )
console.log(topFiveTrending)
  return (
    <div className="p-2 pt-4 lg:pt-6 "> 
     
      <TableLayout 
         mapData={topFiveTrending}
       />
     
        
    </div>
  )
}

export default TrendingCoins
