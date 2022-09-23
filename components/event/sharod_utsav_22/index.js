import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/event/Sharod_utsav_22.module.css";
import sharodUtsavInvite from "../../../public/event_photos/sharod_utsav_22.jpeg";

const SharodUtsav22 = () => {
  return (
    <div className={styles.eventBody}>
      <p>Current Events</p>
      <div>
        Bengali Club presents to you <span>Sharod Utsav 2022</span>!
      </div>
      <Image
        src={sharodUtsavInvite}
        alt="Sharod Utsav"
        height={700}
        width={700}
      />
      <Link href="/">
        <a>Register For Launch</a>
      </Link>
    </div>
  );
};

export default SharodUtsav22;
