import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className="text">
        <h1 className={styles.name}>Adilson Mandlate</h1>
        <p className={styles.about}>
          I'm a front end developer who makes things work beautifully. I have an
          extensive experience with{" "}
          <a
            alt="React"
            target="_blank"
            rel="noreferrer"
            href="https://reactjs.org"
          >
            React
          </a>
          , and some with{" "}
          <a
            alt="Vue"
            target="_blank"
            rel="noreferrer"
            href="https://vuejs.org"
          >
            Vue
          </a>
          , creating complex systems and products that have positive impact on
          the world.
        </p>
      </div>
    </section>
  );
};

export default Home;
