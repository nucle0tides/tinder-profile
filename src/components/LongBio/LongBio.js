import React, { useState } from 'react';
import bio from './bio';
import styles from './styles.scss';

// i am...a queen of naming things
const LongBio = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={styles.bio}>
        <button type="button" onClick={() => {}}>
          {bio}
        </button>
      </div>
    </>
  );
};

export default LongBio;
