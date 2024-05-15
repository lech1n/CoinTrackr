import "./Dashboard.css"
import TopFive from "../../components/TopFive"
import TotalBalance from "../../components/TotalBalance"
import MixedSparklines from "../../components/MixedSparklines"
import TrendingCoins from "../../components/TrendingCoins"
import LatestPurchases from "../../components/LatestPurchases"
import useCoinData from "../../components/useCoinData"
import CryptoNews from "../../components/CryptoNews"

const Dashboard = () => {
  const {isLoading} = useCoinData()
  
 
  return (
    <div>
      <TotalBalance />
      <TopFive />
      <MixedSparklines />
      <TrendingCoins />
      <LatestPurchases />
      <CryptoNews />
    </div>
  )
}

export default Dashboard
