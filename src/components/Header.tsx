import logo from "../assets/logo_final.png";

const Header = () => (
  <header className="h-20 bg-base-200 grid grid-cols-2 place-items-center">
    <div className="flex">
      <a className="absolute left-3 top-4  flex justify-center items-center flex-nowrap">
        <img src={logo} className="max-h-12 hidden lg:block" />
      </a>
    </div>
    <div
      role="tablist"
      className="p-3 tabs grid grid-flow-col gap-2 lg:gap-40 absolute"
    >
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
