import logo from "../assets/logo_final.png";

const Header = () => (
  <header className="h-20 bg-base-200 grid place-items-center z-30">
    <div role="tablist" className="p-3 tabs grid grid-flow-col gap-4">
      <a role="tab" className="tab  flex-auto ">
        <img src={logo} className="max-h-12" />
      </a>
      <a href="#sklenik_description" role="tab" className="tab">
        <p className="font-bold">OZ SKLENÍKY</p>
      </a>
      <a href="#galeria" role="tab" className="tab">
        <p className="font-bold">FOTOGALÉRIA</p>
      </a>
      <a href="#kontakt" role="tab" className="tab">
        <p className=" font-bold">KONTAKT</p>
      </a>
    </div>
  </header>
);

export default Header;
