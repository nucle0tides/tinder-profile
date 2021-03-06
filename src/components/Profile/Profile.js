import React from 'react';
import Image from '../Image/Image';
import Bio from '../Bio/Bio';
import LongBio from '../LongBio/LongBio';
import Actions from '../Actions/Actions';
import styles from './styles.scss';

const Profile = () => (
  <div className={styles.profile}>
    <Image />
    <Bio />
    <LongBio />
    <Actions />
  </div>
);

export default Profile;
