import Image from "next/image";
import Link from "next/link";
import clubLogo from "../../public/logo.png";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/">
          <a className={styles.logoAnchor}>
            <Image
              src={clubLogo}
              alt="Bengali Club Logo"
              width={80}
              height={80}
            />
          </a>
        </Link>
      </div>
      <ul className={styles.navbarItemContainer}>
        <li className={styles.navbarItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {/* <li className={styles.navbarItem}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li> */}
        <li className={styles.navbarItem}>
          <Link href="/event/sharod-utsav-22">
            <a>Current Event</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
