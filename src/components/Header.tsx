const Header = () => (
  <header className="h-20 bg-base-200 grid place-items-center z-30">
    <div role="tablist" className="p-3 tabs grid grid-flow-col gap-4">
      <a role="tab" className="tab  flex-auto ">
        <p className="prose  lg:prose-xl font-bold">Domov</p>
      </a>
      <a href="#sklenik_description" role="tab" className="tab  flex-auto">
        <p className="prose  lg:prose-xl font-bold">OZ skleníky</p>
      </a>
      <a href="#galeria" role="tab" className="tab  flex-auto">
        <p className="prose  lg:prose-xl font-bold">Fotogaléria</p>
      </a>
    </div>
  </header>
);

export default Header;
