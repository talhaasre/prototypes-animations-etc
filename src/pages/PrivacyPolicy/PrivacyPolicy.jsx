import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import { privacyData } from "../../data/data";
import styles from "./privacypolicy.module.scss";

const PrivacyPolicy = () => {
  const dataList = privacyData.map((item, i) => (
    <div className={styles.text_container} key={i}>
      <h3
        className={styles.heading}
        dangerouslySetInnerHTML={{ __html: item.heading }}
      ></h3>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: item.description }}
      ></p>
    </div>
  ));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner firstText="Privacy" secondText="Policy" />
      <section className={styles.privacy_sec1}>
        <div className="my_container">
          <div className={styles.text_container}>{dataList}</div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
