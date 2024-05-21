import useCoinData from "./useCoinData"

export const SelectComponent = () =>{
 return(
   <div className="relative">
    <input type="text" className="bg-bg-color-l dark:bg-bg-color-d text-grey-txt p-2 w-full rounded-md"></input>
    <select className="absolute p-1 right-1.5 bottom-[6px] bg-container-color-l dark:bg-container-color-d  text-grey-txt ">
        <option value={"hello"}>Hello</option>
        <option value={"bye"}>Bye</option>
        <option value={"hi"}>Hi</option>
    </select>
   </div> 
 )
}


export const CryptoConverter = () => {
 const {coinExchange} = useCoinData()
 console.log(coinExchange)
  return (
    <div className="p-2 pt-4 lg:pt-6 h-[400px] 2xl:h-2/4 w-full">
      <div className="bg-container-color-l dark:bg-container-color-d rounded-xl drop-shadow-lg p-4 flex item-center justify-center h-full">
       <div className="flex flex-col justify-center items-center gap-4 w-full sm:w-11/12">
        <h1 className="text-deeppurple text-xl sm:text-2xl font-bold">Convert</h1>
        <div className="flex flex-col gap-2 w-full">
        <SelectComponent />
        <SelectComponent />
        </div>
        <button className="w-full p-2 bg-deeppurple text-white-txt rounded-md hover:opacity-70">Convert Now</button>
       </div>
       </div>
    </div>
  )
}

