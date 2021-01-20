import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import bio from './bio';
import styles from './styles.scss';

// i am...a queen of naming things
const LongBio = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={styles.bio}>
        <button type="button" onClick={() => setShow(true)}>
          {bio}
        </button>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Body>{bio}</Modal.Body>
      </Modal>
    </>
  );
};

export default LongBio;
