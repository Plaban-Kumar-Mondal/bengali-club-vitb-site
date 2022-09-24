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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa
          maxime accusantium, amet fugit placeat laborum dicta incidunt
          necessitatibus officia? Inventore ipsum eligendi tenetur voluptate
          natus earum veritatis delectus sed provident dignissimos. A explicabo
          ad culpa quam repellat deleniti molestiae dignissimos. Soluta
          explicabo, doloribus, quaerat facere, nihil temporibus quisquam harum
          eos fuga non officia maxime? Consequuntur totam doloremque aliquam
          animi nesciunt deserunt cupiditate facilis assumenda fuga voluptatem
          debitis eligendi consectetur quam, ullam dolores sint provident autem
          repudiandae nemo voluptate optio natus asperiores, delectus
          accusantium! Excepturi sequi veritatis dolor debitis quos! Non ab
          eligendi blanditiis numquam ducimus ipsam adipisci suscipit
          doloremque!
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          ad ipsa illum cupiditate nostrum pariatur, voluptas aliquam dolore
          quod sunt iure, qui est odio, labore maxime. Animi, culpa. Nulla eum
          aut necessitatibus dolores magnam esse vitae, similique nesciunt,
          saepe ex cumque velit fugiat, accusantium provident dignissimos
          molestias omnis inventore explicabo quia facere sapiente? Quam ullam,
          sequi voluptate voluptatum unde aliquam reiciendis quae quos
          repellendus, expedita asperiores eveniet beatae aliquid sed dolores!
          Nemo, eaque? Deserunt voluptate iure suscipit id totam aliquam
          aspernatur, veniam rerum accusantium atque laborum mollitia molestiae
          ipsum, dolore, facere dolorum est animi quos laboriosam. Sint
          accusamus ducimus commodi.
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          delectus, distinctio ad doloremque quo eligendi, sequi repudiandae
          doloribus enim itaque alias. Atque ad cupiditate odio aliquam, eaque,
          numquam, repellat quibusdam consequuntur quia dicta pariatur fugiat
          consectetur deleniti obcaecati ea voluptates veritatis nulla accusamus
          quaerat tempora debitis. Molestiae labore, at officiis modi asperiores
          dignissimos, ad a voluptas, debitis consequuntur explicabo voluptate
          aperiam veniam adipisci vitae molestias! Aliquid perspiciatis
          explicabo dolores voluptas?
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
