import React from 'react'
import UserCard from './UserCard';


const UserCardList = (props) => {
  const { userData } = props;
  return (
    <>
      {userData.map((user) => (
        <UserCard{...user} />
      ))}
    </>
  )
}

export default UserCardList;
