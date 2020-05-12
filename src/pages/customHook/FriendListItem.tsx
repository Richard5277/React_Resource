import React from 'react';
import useFriendStatus from './useFriendStatusHook';
import styles from '../../shared/styles.module.css';

function FriendListItem(props: any) {
  const isOnline = useFriendStatus(props.id);

  return (
    <span className= { isOnline === null ? styles.pending : isOnline ? styles.online : styles.offline }>
      {props.name}
    </span>
  );
}

export default FriendListItem;