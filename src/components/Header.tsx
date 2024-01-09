const Header = () => (
  <header className="h-20 bg-base-200 grid place-items-center ">
    <div role="tablist" className="tabs flex w-3/5">
      <a role="tab" className="tab tab-lg flex-auto ">
        <article className="prose prose-stone prose-xl">Domov</article>
      </a>
      <a role="tab" className="tab tab-lg flex-auto">
        <article className="prose prose-stone prose-xl">OZ sklenik</article>
      </a>
      <a role="tab" className="tab tab-lg flex-auto">
        <article className="prose prose-stone prose-xl">Galeria</article>
      </a>
    </div>
  </header>
);

export default Header;
