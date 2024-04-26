import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./pages/coin/Coin"
import Dashboard from "./pages/dashboard/Dashboard"
import MarketCap from "./pages/marketcap/MarketCap"
import News from "./pages/news/News"
import Portofolio from "./pages/portofolio/Portofolio"
import RootLayout from "./pages/rootlayout/RootLayout"
import Settings from "./pages/settings/Settings"



const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={  <RootLayout /> }>
      <Route index element={ <Dashboard /> }/>
      <Route path="/portofolio" element={  <Portofolio /> }/>
      <Route path="/market" element={ <MarketCap />}/>
      <Route path="/news" element={ <News /> }/>
      <Route path="/settings" element={ <Settings /> }/>
      <Route path="/coin" element={ <Coin /> }/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
