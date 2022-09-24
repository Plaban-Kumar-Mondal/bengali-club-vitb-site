import styles from "../../styles/Home.module.css";
import SharodUtsav22Home from "../event/sharod_utsav_22/sharod_utsav_home";

const HomeComponent = () => {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.clubTitle}>Bengali Club of VIT, Bhopal</p>
        <p className={styles.clubInfo}>
          Bengali Club represents the bengali commnuity in VIT, Bhopal. We at
          Bengali club try to bring the bengali culture through various events
          and give everyone a taste of bengali culture.
        </p>
      </section>
      <section>
        <SharodUtsav22Home />
      </section>
    </>
  );
};

export default HomeComponent;
