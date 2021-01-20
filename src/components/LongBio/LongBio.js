import React from 'react';
import bio from './bio';
import styles from './styles.scss';

// i am...a queen of naming things
const LongBio = () => (
  <div className={styles.bio}>
    <button type="button" onClick={() => {}}>
      {bio}
    </button>
  </div>
);

export default LongBio;
