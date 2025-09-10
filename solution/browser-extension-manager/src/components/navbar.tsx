import Brand from "../../../../assets/images/logo.svg";

export default function Navbar() {
  return (
    <nav>
      <img src={Brand} alt="brand" />
      <div className="theme-toggle">
        <img src="../assets/images/icon-moon.svg" alt="dark mode" />
      </div>
    </nav>
  );
}
