import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <Header />
      <main className="mb-auto p-14 grid place-items-center flex-grow">
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
