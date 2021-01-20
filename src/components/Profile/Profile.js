import React from 'react';
import Image from '../Image/Image';
import Bio from '../Bio/Bio';
import LongBio from '../LongBio/LongBio';
import styles from './styles.scss';

const Profile = () => (
  <div className={styles.profile}>
    <Image />
    <Bio />
    <LongBio />
  </div>
);

export default Profile;
