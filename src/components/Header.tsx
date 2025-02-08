import logo from "../assets/logo_final.png";
import Menu from "./menu/Menu";

const Header = () => (
  <header className="h-20 grid grid-cols-2 place-items-center">
    <div className="flex">
      <a className="absolute left-5 top-0 flex justify-center items-center flex-nowrap p-4 bg-base-0">
        <img src={logo} className="max-h-9 lg:block" />
      </a>
    </div>
    <div
      role="tablist"
      className="tabs grid grid-flow-col lg:gap-40 absolute invisible lg:visible"
    >
      <a href="#sklenik_description" role="tab" className="tab">
        <p className="font-bold">OZ SKLENÍKY</p>
      </a>
      <a href="#galeria" role="tab" className="tab">
        <p className="font-bold">FOTOGALÉRIA</p>
      </a>
      <a href="#support_us" role="tab" className="tab">
        <p className=" font-bold">2%</p>
      </a>
      <a href="#kontakt" role="tab" className="tab">
        <p className=" font-bold">KONTAKT</p>
      </a>
    </div>
    <div className="visible lg:invisible">
      <div className="absolute right-6 top-3">
        <Menu />
      </div>
    </div>
  </header>
);

export default Header;
