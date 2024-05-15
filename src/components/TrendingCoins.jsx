import useCoinData from "./useCoinData";
import TableLayout from "./TableLayout";
import { HiTrendingUp } from "react-icons/hi"

const TrendingCoins = () => {
    const {isLoading, coinDataTrending} = useCoinData()
    
    if (isLoading) {
        return null; 
      }
const topFiveTrending = coinDataTrending.coins.slice( 0 , 5 )
  return (
    <div className="p-2 pt-4 lg:pt-6 "> 
     
      <TableLayout 
         mapData={topFiveTrending}
       />
     
        
    </div>
  )
}

export default TrendingCoins
