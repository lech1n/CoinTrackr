import "./Dashboard.css"
import TopFive from "../../components/TopFive"
import TotalBalance from "../../components/TotalBalance"

const Dashboard = () => {
  return (
    <div>
      <TotalBalance />
      <TopFive />
    </div>
  )
}

export default Dashboard
