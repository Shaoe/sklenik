import sklenikLogo from "./assets/logo_final.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={sklenikLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>OZ skleník</h1>
      <p className="read-the-docs">
        Kontakt
        <a href={"mailto:oz.skleniky@gmail.com"}> oz.skleniky@gmail.com</a>
      </p>
    </>
  );
}

export default App;
