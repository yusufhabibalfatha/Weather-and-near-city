import { useState } from "react";
import Footer from "./Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [userCity, setUserCity] = useState('jakarta')
  return (
    <div className="App font-base">
      {/* ---Loading component */}
      <div className="bg-base_four h-screen">
        <Header setUserCity={setUserCity}/>
        {/* <Main state_city={{city, setCity}}/> */}
        <Main userCity={userCity} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
