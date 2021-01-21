import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.scss';

const Actions = () => (
  <div className={styles.actionsContainer}>
    <button type="button" className={cx(styles.actionBtnBig, styles.red)}>
      <FontAwesomeIcon icon={faTimes} />
    </button>
    <button type="button" className={cx(styles.actionBtn, styles.green)}>
      <FontAwesomeIcon icon={faStar} />
    </button>
    <button type="button" className={cx(styles.actionBtnBig, styles.blue)}>
      <FontAwesomeIcon icon={faHeart} />
    </button>
  </div>
);

export default Actions;
