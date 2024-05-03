import { LuArrowDownLeft , LuArrowUpRight } from "react-icons/lu"

const TotalBalance = () => {
  return (
    <section className="p-2 pt-4 lg:pt-6">
        <div className="bg-container-color-l dark:bg-container-color-d flex flex-col sm:flex-row sm:justify-between items-center gap-6 p-6 xl:p-8 rounded-xl drop-shadow-lg">
        <div>
          <h3 className="dark:text-white-txt">Total Asset Value</h3>
          <h1 className="text-3xl md:text-4xl  font-semibold text-deeppurple drop-shadow-md">$110.011<span className="text-grey-txt text-xs">.00</span></h1>
        </div>
        <div className="flex justify-between items-center flex-wrap w-full sm:w-1/2 sm:max-w-[300px] divide-x divide-bg-color-l dark:divide-bg-color-d">
            <div className="flex flex-col justify-center items-center text-sm lg:text-base w-2/6">
             <h3 className="text-center text-grey-txt">Today</h3>
             <div className="flex justify-between items-center gap-2">
             <h3 className="dark:text-white-txt font-semibold">-2.5%</h3>
             <LuArrowDownLeft className="text-[#e23636]" />
             </div>
             </div>
            <div className="flex flex-col justify-center items-center text-sm lg:text-base w-2/6">
             <h3 className="text-center text-grey-txt">7 Days</h3>
             <div className="flex justify-between items-center gap-2">
             <h3 className="dark:text-white-txt font-semibold">+4.11%</h3>
             <LuArrowUpRight className="text-[#82dd55]"/>
             </div>
             </div>
            <div className="flex flex-col justify-center items-center text-sm lg:text-base w-2/6">
             <h3 className="text-center text-grey-txt">30 Days</h3>
             <div className="flex justify-between items-center gap-2">
             <h3 className="dark:text-white-txt font-semibold">+11.11%</h3>
             <LuArrowUpRight className="text-[#82dd55]"/>
             </div>
            </div> 
        </div>
     </div>
    </section>
  )
}

export default TotalBalance
