const Header = () => (
  <header className="h-20 bg-base-200 grid place-items-center ">
    <div role="tablist" className="tabs flex w-3/5">
      <a role="tab" className="tab tab-lg flex-auto ">
        <p className="prose prose-stone prose-xl font-bold">Domov</p>
      </a>
      <a role="tab" className="tab tab-lg flex-auto">
        <p className="prose prose-stone prose-xl font-bold">OZ skleníky</p>
      </a>
      <a role="tab" className="tab tab-lg flex-auto">
        <p className="prose prose-stone prose-xl font-bold">Galéria</p>
      </a>
    </div>
  </header>
);

export default Header;
