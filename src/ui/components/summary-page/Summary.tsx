import { useState } from 'react';
import styles from './Summary.module.less';

export const Summary = () => {
  const [userData, setUserData] = useState({});

  return (
    <div className={styles.summaryContainer}>
    </div>
  )
}
