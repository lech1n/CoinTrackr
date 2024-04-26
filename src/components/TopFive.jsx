import useCoinData from "./useCoinData"

const TopFive = () => {
    const {coinData , isLoading , error} = useCoinData()
    
    console.log(coinData)
  return (
    <div>
      top five
    </div>
  )
}

export default TopFive
