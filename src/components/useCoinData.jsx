import { useState , useEffect } from "react"

const useCoinData = () => {
 const [coinData , setCoinData ] = useState(null)
 const [isLoading , setIsLoading] = useState(true)
 const [error , setError] = useState(null)
 
 //6a3d95e2-cd68-40de-8e61-602fd020eb23
 useEffect(() => {
    const fetchCoinData = async () =>{
        try {
            const response = await fetch("https://api.coingecko.com/api/v3//global?x_cg_demo_api_key=CG-3mz4o65jy7CTBzWksaMniVmx")
            if(!response.ok){
                throw new Error("Failed to fetch coin data")
            }
            const data = await response.json()
            setCoinData(data)
        }catch(error){
            setError(error.message)
        }finally{
            setIsLoading(false)
        }
    }
    fetchCoinData()
 } , [])

  return {coinData , isLoading ,error  }
}

export default useCoinData
