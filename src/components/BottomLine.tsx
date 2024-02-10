import fbLogo from "../assets/logo_facebook.png";
import instaLogo from "../assets/logo_instagram.png";

const BottomLine = () => (
  <div className="h-20  bg-base-200 flex flex-row	items-center justify-center">
    <a href={"https://www.facebook.com/profile.php?id=100091756742140"}>
      <img src={fbLogo} className="max-h-12" />
    </a>
    {/* <a href={""}> */}
    <img src={instaLogo} className="max-h-12" />
    {/* </a> */}
  </div>
);

export default BottomLine;
