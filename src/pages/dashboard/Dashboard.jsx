import "./Dashboard.css"
import { useEffect, useRef, useState } from 'react'
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
    <div  className="grid dashboard ">
      <section className="main">
      <TotalBalance />
      <TopFive />
      <div className="lg:flex">
      <MixedSparklines/>
      <TrendingCoins />
      </div>
      <LatestPurchases />
      </section>
      <div className={`md:flex 2xl:flex-col sidebar sticky top-0`}>
      <CryptoNews />
      <CryptoConverter />
      </div>
      
    </div>
  )
}

export default Dashboard
//<MixedSparklines />