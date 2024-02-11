import { Dropdown } from "react-daisyui";

const Menu = () => {
  return (
    <>
      <Dropdown horizontal="left" vertical="bottom">
        <Dropdown.Toggle button={false}>
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </Dropdown.Toggle>
        <Dropdown.Menu className="w-52 mt-4 z-30">
          <Dropdown.Item href="#sklenik_description">
            <p className="font-bold">OZ SKLENÍKY</p>
          </Dropdown.Item>
          <Dropdown.Item href="#galeria">
            <p className="font-bold">FOTOGALÉRIA</p>
          </Dropdown.Item>
          <Dropdown.Item href="#kontakt">
            <p className=" font-bold">KONTAKT</p>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Menu;
