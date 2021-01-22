import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.scss';

const Bio = () => (
  <>
    <div className={styles.bio}>
      <div className={styles.name}>
        <h1>Beans</h1>
        <h4>3 mo</h4>
      </div>
      <div className={styles.location}>
        <h6>
          <FontAwesomeIcon icon={faGraduationCap} fixedWidth />
          Iowa State University, B.S. Yarn Fighting
        </h6>
        <h6>
          <FontAwesomeIcon icon={faMapMarker} fixedWidth />
          2 miles away
        </h6>
      </div>
    </div>
    <hr />
  </>
);

export default Bio;
