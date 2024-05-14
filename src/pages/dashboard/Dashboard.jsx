import "./Dashboard.css"
import TopFive from "../../components/TopFive"
import TotalBalance from "../../components/TotalBalance"
import MixedSparklines from "../../components/MixedSparklines"
import TrendingCoins from "../../components/TrendingCoins"
import LatestPurchases from "../../components/LatestPurchases"

const Dashboard = () => {
 
  return (
    <div>
      <TotalBalance />
      <TopFive />
      <MixedSparklines />
      <TrendingCoins />
      <LatestPurchases />
    </div>
  )
}

export default Dashboard
