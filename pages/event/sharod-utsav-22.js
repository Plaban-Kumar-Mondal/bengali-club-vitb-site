import Image from "next/image";
import introImg from "../../public/event_photos/sharod_utsav_22_intro.png";
import scheduleImg from "../../public/event_photos/sharod_utsav_22_schedule.png";
import menuImg from "../../public/event_photos/sharod_utsav_22_menu.png";
import styles from "../../styles/event/Sharod_utsav_22.module.css";

const SharodUtsav22 = () => {
  return (
    <div className={styles.eventPageBody}>
      <h1 className={styles.eventPageHeader}>
        <span className={styles.sharodSpan}>Sharod</span> Utsav{" "}
        <span className={styles.bochorSpan}>2022</span>
      </h1>
      <section className={styles.eventPageIntro}>
        <Image
          src={introImg}
          alt="Introduction of sharod utsav"
          width={450}
          height={500}
        />
        <div className={`${styles.eventPageText}`}>
          West Bengal is one of the most culturally flourished states and has
          its roots in Bengali literature, music, best arts, drama, and cinema.
          Whenever we think of Bengali culture, Rabindra sangeet, the sound of a
          conch shell(shankha), and the fragrance of dhunu comes to our mind.
          The Bengali club is showcasing one of the most popular cultures,
          Sharad Utsav popularly known as Durga Puja, on the 30th of September
          2022 on the grounds of VIT Bhopal.
        </div>
      </section>
      <section className={styles.eventPageSchedule}>
        <Image
          src={scheduleImg}
          alt="Event schedule for sharod utsav"
          width={540}
          height={540}
        />
        <div className={`${styles.eventPageText}`}>
          The Sharad Utsav 2022 would include a procession, singing drama, folk
          dance, fusion dance, and fashion show to exhibit the Bengali culture
          from different eras. The Utsav starts with the procession from 9 am at
          the main gate of VIT Bhopal. It is then followed by events at the
          auditorium from 10 am. The event starts with an introduction to the
          event followed by kurashikaru(folk dance) which would last till 10:15
          am. The event will proceed with drama till 10:40 am. The members of
          the Bengali club would present melodious songs in front of the people
          till 11 am. Following that is the Fashion show, portraying how the
          Bengali culture evolved through different eras till 11:20 am. The
          occasion inside the auditorium will finish with a fusion dance lasting
          until 11:30 am. The further events would be conducted in the parking
          lot or in front of the MPH(Multi-Purpose Hall)which would include our
          characteristic Dhunuchi dance and cultural jamming.
        </div>
      </section>
      <section className={styles.eventPageMenu}>
        <Image
          src={menuImg}
          alt="Menu for sharod utsav"
          width={450}
          height={500}
        />
        <div className={`${styles.eventPageText}`}>
          The main attraction of Sharad Utsav 2022 is the food which would have
          different Bengali delicacies for both veg and non-veg. The food which
          is served is in the form of a buffet and is unlimited so that people
          can enjoy Bengali food as much as possible. Veg menu includes achar,
          beguni,luchi, aloo bhaja steam rice/ veg pulao, dal makhani, Bengali
          masala aloo dum, Matar paneer, boondi raita, papad, tomato chutney,
          and moong dal halwa. Non-veg menu includes achar, beguni, luchi, aloo
          bhaja, steam rice/veg pulao, dal makhani, Bengali chicken kasha,
          Bengali Katla(fish) Kalia, boondi raita, papad, tomato chutney and
          moong dal halwa.Mineral water and salad will be served to all.
        </div>
      </section>
      <section className={styles.eventPageContact}>
        <p className={styles.eventContactHeader}>
          Contact these room for food coupon
        </p>
        <div>
          <p className={styles.contactContainer}>
            <span>Boys Hostel Block 1</span>
            <span>Room no: 635, 321 </span>
          </p>
          <p className={styles.contactContainer}>
            <span>Boys Hostel Block 3</span>
            <span>Room no: B111, A005</span>
          </p>
          <p className={styles.contactContainer}>
            <span>Girls Hostel</span>
            <span>Room no: 262, 317 </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SharodUtsav22;
