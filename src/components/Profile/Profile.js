import React from 'react';
import Image from '../Image/Image';
import Bio from '../Bio/Bio';
import styles from './styles.scss';

const Profile = () => (
  <div className={styles.profile}>
    <Image />
    <Bio />
  </div>
);

export default Profile;
