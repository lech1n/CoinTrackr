import { useState } from "react"
import { Sparklines , SparklinesLine } from 'react-sparklines';
import useCoinData from "./useCoinData"
import Skeleton from "./Skeleton";

const TopFive = () => {
    const {coinDataGlobal , isLoading} = useCoinData()

    if (isLoading) {
      return null
    }
    console.log(coinDataGlobal)

    const topFiveCoins = coinDataGlobal.data.coins.slice(0 , 4)
    const redText={
      color:"#e23636",
    }
   
    const greenText={
      color:"#82dd55",
    }

    const color = '#e15759'


    
    console.log(topFiveCoins)
  return (
    <div className="p-2 pt-4 lg:pt-6 grid sm:grid-cols-2 sm:justify-items-stretch lg:grid-cols-4 gap-4">
     {
        topFiveCoins.map((coins) => (
          <div key={coins.symbol} className="p-4 py-7 flex flex-col gap-6 bg-container-color-l dark:bg-container-color-d rounded-xl drop-shadow-lg">
            <div className="flex justify-between align-cente">
              <div>
                <img  className="w-8" src={coins.iconUrl}  alt="coin image"/>
              </div>
              <div>
                <h2 className="font-semibold  dark:text-white-txt">{coins.name}</h2>
                <h4 className="text-xs text-deeppurple font-semibold">{coins.symbol}</h4>
              </div>
            </div>

            <div className="flex justify-between align-center">
              <div className="flex-1 self-center">
                <h2 className="font-semibold dark:text-white-txt">{`$${parseFloat(coins.price).toFixed(2)}`}</h2>
                <h4 className="text-xs" style={coins.change > 0 ? greenText : redText}>{ coins.change > 0 ? `+${coins.change}%` : `${coins.change}%` } </h4>
              </div>
              <div className="w-2/6">
                
             <Sparklines data={coins.sparkline.map(Number)} height={90}>
              <SparklinesLine color="#b242f5"/>
             </Sparklines>

              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TopFive

