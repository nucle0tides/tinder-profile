import React from 'react';
import styles from './styles.scss';

const Bio = () => (
  <>
    <div className={styles.bio}>
      <div className={styles.name}>
        <span><h1>Beans</h1></span>
        <span><h4>3 mo</h4></span>
      </div>
      <div className={styles.location}>
        <h6>Iowa State University, B.S. Yarn Fighting</h6>
        <h6>2 miles away</h6>
      </div>
    </div>
    <hr />
  </>
);

export default Bio;
