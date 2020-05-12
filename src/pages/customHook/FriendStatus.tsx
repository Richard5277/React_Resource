import React from 'react';
import useFriendStatus from './useFriendStatusHook';
import styles from '../../shared/styles.module.css';

function FriendStatus(id: number) {
  const isOnline = useFriendStatus(id)
  if (isOnline === null) {
    return 'Loading ...'
  }
  return isOnline ? 
    <span className={styles.online}>Online</span> : 
    <span className={styles.offline}>Offline</span>
}

export default FriendStatus;