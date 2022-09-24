import Image from "next/image";
import styles from "../../styles/Footer.module.css";
import universityLogo from "../../public/university_logo.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <h4>Bengali Club</h4>
        <h5>VIT Bhopal University</h5>
        <p>
          Bhopal-Indore Highway <br /> Kothrikalan, Sehore <br /> Madhya Pradesh
          - 466114
        </p>
      </div>
      <div className={styles.socialMedia}>
        <h4>Follow Us</h4>
        <a href="https://instagram.com/bengali_club_vitb?igshid=YmMyMTA2M2Y=">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className={styles.uniLogo}>
        <Image
          src={universityLogo}
          width={230}
          height={90}
          alt="VIT Bhopal University"
        />
      </div>
    </div>
  );
};

export default Footer;
