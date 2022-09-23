import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>Bengali Club VIT Bhopal</div>
      <ul className={styles.navbarItemContainer}>
        <li className={styles.navbarItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
