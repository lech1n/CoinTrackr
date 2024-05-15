import { HiMiniArrowsUpDown } from "react-icons/hi2"
const LatestPurchases = () => {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
    const getRandomFloat = (min, max, decimals) => parseFloat((Math.random() * (max - min) + min).toFixed(decimals))
    const generateRandomId = () =>  Math.random().toString(36).substr(2, 6)
    
    const generateRandomPurchases = (numPurchases) => {
      const coins = ["Bitcoin", "Ethereum", "Ripple", "Litecoin", "Cardano"]
      const purchases = []
      const today = new Date()
      const todayDate = today.toLocaleDateString();
    
      for (let i = 0; i < numPurchases; i++) {
        const coinName = coins[getRandomInt(0, coins.length - 1)]
        const amountPurchased = getRandomFloat(0.01, 10, 2)
        const purchaseDate = todayDate
        const transactionId = generateRandomId()

    
        purchases.push({
          coinName,
          amountPurchased,
          purchaseDate,
          transactionId,
        })
      }
    
      return purchases
    }
    
    const latestPurchases = generateRandomPurchases(10)
    console.log(latestPurchases)
    
  return (
    <div className="p-2 pt-4 lg:pt-6">
      <div className=" p-2 lg:p-4 bg-container-color-l dark:bg-container-color-d rounded-xl drop-shadow-lg">
      <div className="p-2 flex align-center gap-2">
      <h1  className="dark:text-white-txt pb-6 font-bold text-base sm:text-lg lg:text-xl">Latest Transactions</h1>
      <span className="text-deeppurple"><HiMiniArrowsUpDown className="text-xl"/></span>
      </div>
      <div className="relative overflow-x-auto ">
        <table className="table-auto border-collapse w-full text-sm text-left rtl:text-right">
            <tr className="text-xs text-deeppurple uppercase bg-gray-50">
               <th className="px-3 py-2 sm:px-6 sm:py-3">ID</th> 
               <th className="px-3 py-2 sm:px-6 sm:py-3">Coin</th>  
               <th className="px-3 py-2 sm:px-6 sm:py-3">Amount</th>  
               <th className="px-3 py-2 sm:px-6 sm:py-3">Date</th>  
            </tr>
      {latestPurchases.map((item)=>(
         <tr key={item.transactionId} className="border-b dark:text-white-txt border-grey-txt dark:border-purple cursor-pointer ">
         <td className="px-3 py-2 sm:px-6 sm:py-3"> {item.transactionId}</td>
         <td className="px-3 py-2 sm:px-6 sm:py-3">{item.coinName}</td>
         <td className="px-3 py-2 sm:px-6 sm:py-3">+{item.amountPurchased}</td>
         <td className="px-3 py-2 sm:px-6 sm:py-3"> {item.purchaseDate}</td>
     </tr>
      ))}
      </table>
      </div>
    </div>
    </div>
  )}


export default LatestPurchases
