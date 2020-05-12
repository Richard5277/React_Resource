const subscribeToFriendStatus = ( id: number, handleStatusChange: (status: any) => void ) => {
  console.log('Subscribe to ChatAPI ...')
  // mock api call to fetch user status with id
  // const isFriendOnline = async ChatAPIService.get('', {id: id})
  // return handleStatusChange({online: isFriendOnline})
  
  // simulate async API call
  setTimeout(() => {
    
    switch (id) {
      case 1: {
        return handleStatusChange({online: true})
      }
  
      case 2: {
        return handleStatusChange({online: true})
      }
  
      case 3: {
        return handleStatusChange({online: false})
      }
  
      default :
        return handleStatusChange({online: true})
    }

  }, 1500)
 
}

const unsubscribeFromFriendStatus = ( id: number, handleStatusChange: (status: any) => void ) => {
  console.log('Unsubscribe ChatAPI ...')
}

const getFriendList = () => {
  return [
    {
      id: 1,
      name: 'Chris'
    },
    {
      id: 2,
      name: 'Linda'
    },
    {
      id: 3,
      name: 'Jeff'
    }
  ]
}

export default {
  getFriendList,
  subscribeToFriendStatus,
  unsubscribeFromFriendStatus
};