import React from 'react';

const UserCard = props => {
  return(


    <div>
      <img 
      src={props.avatar_url}
      alt={`${props.name}`}
      />
      <p>
        {props.name}
      </p>
    </div>
  )
}

export default UserCard;