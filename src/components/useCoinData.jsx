import { useState, useEffect } from "react"
import axios from 'axios'

const useCoinData = () => {
  const [coinDataGlobal, setCoinDataGlobal] = useState([])
  const [coinDataTrending, setCoinDataTrending] = useState([])
  const [coinExchange, setCoinExchange] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    
    const fetchData = async () => {
      //coinrankingc1d85425c15fb3866c513aea59664bfbe418399c15c9c15a
      try {
        const response = await axios.all([
          axios.get('https://api.coinranking.com/v2/coins?timePeriod=7d&coinrankingc1d85425c15fb3866c513aea59664bfbe418399c15c9c15a'),
          axios.get('https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-3mz4o65jy7CTBzWksaMniVmx'),
          axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=EUR&apikey=demo'),
        ])
        setCoinDataGlobal(response[0].data)
        setCoinDataTrending(response[1].data)
        setCoinExchange(response[2].data)
        setIsLoading(false)
      } catch (error) {
        setError(error.message)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return { coinDataGlobal, coinDataTrending, coinExchange, isLoading, error }
}

export default useCoinData

