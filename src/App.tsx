import sklenikLogo from "./assets/logo_final.png";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="mb-auto h-10  grid place-items-center flex-grow">
        <img src={sklenikLogo} className="w-1/3 " />
      </main>
      <Footer />
    </div>
  );
}

export default App;
