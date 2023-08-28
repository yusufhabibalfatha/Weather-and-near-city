import { useState } from "react";
import Footer from "./Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [userCity, setUserCity] = useState('jakarta')
  return (
    <div className="App font-base overflow-x-hidden w-screen h-screen bg-base_four">
      {/* ---Loading component */}
      <div className="min-h-screen grid grid-rows-[min-content_auto_min-content] pt-8">
        <Header setUserCity={setUserCity}/>
        <Main userCity={userCity} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
