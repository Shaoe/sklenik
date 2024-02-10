import Galery from "./Galery";
import Sponsors from "./Sponsors";
import WallOfText from "./WallOfText";
import fbLogo from "../assets/logo_facebook.png";
import instaLogo from "../assets/logo_instagram.png";

const Footer = () => (
  <div className="pl-5 pr-5 lg:pl-60 lg:pr-60 bg-base-0">
    <Sponsors />
    <WallOfText />
    <Galery />
    <div id="kontakt" className="border-t border-base-300">
      <br />
      <footer className="footer gap-y-6 text-base-content ">
        <nav>
          <p className="font-bold">KONTAKT</p>
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
        </nav>
        <nav>
          <div>
            <a href={"https://www.facebook.com/profile.php?id=100091756742140"}>
              <img src={fbLogo} className="max-h-12" />
            </a>
            {/* <a href={""}> */}
            <img src={instaLogo} className="max-h-12" />
            {/* </a> */}
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-5 gap-y-0 text-base-content border-t border-base-300">
        <p className="font-bold">PODPORTE NÁS DAROVANÍM 2%</p>
      </footer>
    </div>
    {/* </div> */}
  </div>
);

export default Footer;
