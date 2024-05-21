import { ResponsivePie } from '@nivo/pie'
import useCoinData from "./useCoinData"

const MixedSparklines = () => {
   const {coinDataGlobal , isLoading} = useCoinData()

   if (isLoading) {
    return null; 
  }

  const topFiveCoins = coinDataGlobal.data.coins.slice(0, 4)
  const totalMarketCap = Number(coinDataGlobal.data.stats?.totalMarketCap)

  const data = topFiveCoins.map((coin) => ({
     id: coin.name,
     label: coin.name,
     value: Number(coin.marketCap)
  }))

  const sum = data.reduce((acc, coin) => acc + coin.value, 0)
  const otherCoins = totalMarketCap - sum

  data.push({
     id: "Other Coins",
     label: "Other Coins",
     value: otherCoins,
  })

  return (
    <div className="w-full p-2 pt-4 lg:pt-6 hidden sm:block">
     <div className="w-full p-2  bg-container-color-l dark:bg-container-color-d rounded-xl drop-shadow-lg flex justify-center">
      <div className='h-96 w-[500px] 2xl:w-[300px]'>
     <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={-180}
        innerRadius={0.5}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'purpleRed_green' }}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  0.2
              ]
          ]
        }}
        arcLinkLabelsTextColor="#7b7b7b"
        arcLinkLabelsOffset={2}
        arcLinkLabelsStraightLength={7}
        arcLinkLabelsDiagonalLength={9}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsRadiusOffset={1.45}
        arcLabelsTextColor={{ theme: 'background' }}
        
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: -15,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 13,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]} />
    </div>
    </div>
    </div>
  )
}

export default MixedSparklines

/*   <LineChart
       
      max-width={500}
      height={300}
      series={[
        { data: firstCoinSparkline, label: firstCoin?.name },
        { data: secondCoinSparkline, label: secondCoin?.name },
        { data: thirdCoinSparkline, label: thirdCoin?.name },
        { data: fourthCoinSparkline, label: fourthCoin?.name },
      ]
    }
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />*/
