import { useState, useEffect } from 'react';
import ChatAPI from './ChatAPI'

function useFriendStatus(friendId: number) {
  const [isOnline, setIsOnline] = useState(null)
  
  useEffect(() => {
    function handleStatusChange(status: any) {
      setIsOnline(status.online)
    }

    ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange);  

    // clear subscription, prevent memory leak
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange);
    };

  }, [friendId])

  return isOnline
}

export default useFriendStatus;