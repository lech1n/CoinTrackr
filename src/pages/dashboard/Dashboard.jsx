import "./Dashboard.css"
import TopFive from "../../components/TopFive"
import TotalBalance from "../../components/TotalBalance"
import MixedSparklines from "../../components/MixedSparklines"
import TrendingCoins from "../../components/TrendingCoins"
import LatestPurchases from "../../components/LatestPurchases"
import useCoinData from "../../components/useCoinData"
import CryptoNews from "../../components/CryptoNews"
import {CryptoConverter} from "../../components/CryptoConverter"

const Dashboard = () => {
  const {isLoading} = useCoinData()
  
 
  return (
    <div className="grid ">
      <TotalBalance />
      <TopFive />
      <MixedSparklines />
      <TrendingCoins />
      <LatestPurchases />
      <div className="md:flex  item-center ">
      <CryptoNews />
      <CryptoConverter/>
      </div>
      
    </div>
  )
}

export default Dashboard
