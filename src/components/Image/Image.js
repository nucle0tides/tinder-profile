import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './styles.scss';

const Image = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item>
        <img src="https://placekitten.com/g/375/375" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://placekitten.com/g/375/375" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://placekitten.com/g/375/375" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://placekitten.com/g/375/375" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Image;
