import React from 'react';

const UserOutput = ({ username }) => {
  return (
    <div className="user-output">
      <p>{username}</p>
    </div>
  );
};

export default UserOutput;
