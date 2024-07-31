import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import { termsData } from "../../data/data";
import styles from "./terms.module.scss";

const TermsAndConditions = () => {
  const [termsIndex, setTermsIndex] = useState(0);

  const termsList = termsData.map(({ tabName }, i) => (
    <span
      key={i}
      onClick={() => setTermsIndex(i)}
      className={`${styles.terms_tab} ${
        parseInt(termsIndex) === i ? styles.active : ""
      } `}
    >
      {tabName}
    </span>
  ));

  const dataList = termsData[termsIndex].data.map((item, i) => (
    <div className={styles.text_container} key={i}>
      <h3
        className={styles.heading}
        dangerouslySetInnerHTML={{ __html: item.title }}
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
      <Banner firstText="Terms And" secondText="Conditions" />
      <section className={styles.terms_sec1}>
        <div className="my_container">
          <div className={styles.terms_tabs_wrapper}>{termsList}</div>
          <div className={styles.text_container2}>{dataList}</div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
