import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
// import BottomLine from "./components/BottomLine";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <div className="min-h-full max-h-full ">
        <Header />
        <div className="mb-auto pl-40 pr-40 ">
          <Carousel />
        </div>
        {/* <BottomLine /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
