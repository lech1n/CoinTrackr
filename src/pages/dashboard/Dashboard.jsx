import "./Dashboard.css"
import TopFive from "../../components/TopFive"
import TotalBalance from "../../components/TotalBalance"
import MixedSparklines from "../../components/MixedSparklines"

const Dashboard = () => {
 
  return (
    <div>
      <TotalBalance />
      <TopFive />
      <MixedSparklines />
    </div>
  )
}

export default Dashboard
