import petejKA_logo from "../assets/logoAKAop.png";
import BA_logo_bw from "../assets/BAlogo_centr_black.svg";
import park_logo from "../assets/park_logo.png";

const Sponsors = () => (
  <footer className="footer footer-center p-5 gap-y-0 bg-base-200 text-base-content border-t border-base-300">
    <p className="prose  prose-xl font-bold">Podporili nás</p>

    <div className="grid grid-flow-col gap-0 ">
      <img src={petejKA_logo} className="w-1/4 max-w-xl" />
      <img src={BA_logo_bw} className="w-3/4 max-w-xl" />
      <img src={park_logo} className="w-1/4 max-w-xl" />
    </div>
  </footer>
);

export default Sponsors;
