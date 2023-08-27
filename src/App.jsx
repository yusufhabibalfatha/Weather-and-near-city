import Footer from "./Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      {/* ---Loading component */}
      <div className="bg-base_four h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
