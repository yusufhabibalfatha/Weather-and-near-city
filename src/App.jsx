import { useState, lazy } from "react";
const Main = lazy(() => import("./components/Main"))
const Header = lazy(() => import("./components/Header"))
const Footer = lazy(() => import("./Footer"))

function App() {
  const [city, setCity] = useState()
  const [userCity, setUserCity] = useState('jakarta')
  return (
    <div className="font-base overflow-x-hidden w-screen h-screen bg-base_four">
      <div className="min-h-screen grid grid-rows-[min-content_auto_min-content] pt-8">
        <Header setUserCity={setUserCity} setCity={setCity}/>
        <Main userCity={userCity} city={city} setCity={setCity} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
