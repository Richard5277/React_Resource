import React from 'react';
import ChatAPI from './ChatAPI';
import FriendListItem from './FriendListItem';
import FriendStatus from './FriendStatus';

const CustomHookPage = () => (
  <div>
    <h1>Custom Hook</h1>
    <div className="app_customhook-content">
        <h3>Friends List</h3>
        <ul style={{listStyle: 'none'}}>
        {
          ChatAPI.getFriendList().map(friend => (
            <li key={friend.id}>
              {FriendListItem({id: friend.id, name: friend.name})} - {FriendStatus(friend.id)}
            </li>
          ))
        }
        </ul>
      </div>
  </div>
)

export default CustomHookPage;