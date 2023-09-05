import { useState } from "react";
import Footer from "./Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [userCity, setUserCity] = useState('jakarta')
  return (
    <div className="font-base overflow-x-hidden w-screen h-screen bg-base_four">
      <div className="min-hp-screen grid grid-rows-[min-content_auto_min-content] pt-8">
        <Header setUserCity={setUserCity}/>
        {/* <div className="h-screen w-40">
          <div className="bg-black text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, porro.</div>
        </div> */}
        <Main userCity={userCity} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
