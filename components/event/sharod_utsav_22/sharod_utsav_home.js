import Link from "next/link";
import styles from "../../../styles/event/Sharod_utsav_22.module.css";

const SharodUtsav22Home = () => {
  return (
    <div className={styles.eventBody}>
      <p className={styles.currentEvent}>Current Events</p>
      <div className={styles.eventDetails}>
        Bengali Club presents to you <span>Sharod Utsav 2022</span>!
      </div>
      <Link href="/event/sharod-utsav-22">
        <a className={styles.eventBtn}>Event Details</a>
      </Link>
    </div>
  );
};

export default SharodUtsav22Home;
