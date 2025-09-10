import Brand from "../../../../assets/images/logo.svg";
import Switch from "../../../../assets/images/icon-moon.svg";
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={Brand} alt="brand" />
      <div className={styles.themeToggle}>
        <img src={Switch} alt="dark mode" />
      </div>
    </nav>
  );
}
