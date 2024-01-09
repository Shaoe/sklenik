const Header = () => (
  <header className="h-20 bg-base-200 grid place-items-center ">
    <div role="tablist" className="tabs grid grid-flow-col gap-4">
      <a role="tab" className="tab  flex-auto ">
        <p className="prose  lg:prose-xl font-bold">Domov</p>
      </a>
      <a role="tab" className="tab  flex-auto">
        <p className="prose  lg:prose-xl font-bold">OZ skleníky</p>
      </a>
      <a role="tab" className="tab  flex-auto">
        <p className="prose  lg:prose-xl font-bold">Galéria</p>
      </a>
    </div>
  </header>
);

export default Header;
