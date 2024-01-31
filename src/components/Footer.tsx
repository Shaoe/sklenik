import Galery from "./Galery";
import Sponsors from "./Sponsors";
import WallOfText from "./WallOfText";

const Footer = () => (
  <div className="h-min-screen p-5 lg:p-20 bg-base-0">
    {/* <div className="h-10 p-5 lg:h-40 lg:p-20 bg-base-200"> */}
    <Sponsors />
    <WallOfText />
    <Galery />
    <div className="border-t border-base-300">
      <br />
      <footer className="footer gap-y-6 text-base-content ">
        <nav>
          <p className="prose  prose-xl font-bold">KONTAKT</p>
          <a
            href={"mailto:oz.skleniky@gmail.com"}
            className="underline text-blue-400 hover:text-blue-600"
          >
            oz.skleniky@gmail.com
          </a>
          <br />
          <p className="font-bold">Peter Ondrejka</p>
          <p>+421949 131 669</p>
        </nav>
        <nav>
          <p className="font-bold">OZ skleníky</p>
          <p>Domové role 67</p>
          <p>821 05 Bratislava</p>
          <p>IČO: 54 489 156</p>
          <p>IBAN: SK19 8330 0000 0024 0216 1877</p>
          <p>BIC/SWIFT: FIOZSKBAXXX</p>
          <br />
          <p>PODPORTE NÁS DAROVANÍM 2%</p>
        </nav>
        <nav>
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
        </nav>
      </footer>
    </div>
    {/* </div> */}
  </div>
);

export default Footer;
