const Footer = () => (
  <div className="h-10">
    <footer className="footer footer-center p-8  bg-base-200 text-base-content ">
      <p className="prose prose-stone prose-xl font-bold">
        Kontakt
        <a
          href={"mailto:oz.skleniky@gmail.com"}
          className="underline text-blue-400 hover:text-blue-600"
        >
          oz.skleniky@gmail.com
        </a>
      </p>
      <a href={"https://www.facebook.com/profile.php?id=100091756742140"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          className="fill-current"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </footer>
    <footer className="footer footer-center p-5 bg-base-200 text-base-content border-t border-base-300">
      <p className="prose prose-stone prose-xl font-bold">Podporili nás</p>

      <div className="grid grid-flow-col gap-4 ">
        <img src="BAlogo_centr_black.svg" className="w-2/3 max-w-xl" />
        <img src="logoAKAop.png" className="w-1/3 max-w-xl" />
      </div>
    </footer>
  </div>
);

export default Footer;
