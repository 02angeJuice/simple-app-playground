import React from 'react';

const UserInput = ({ inputChange, value }) => {
  return (
    <div className="user-input">
      <div className="user-form">
        <label
          className="user-form-label"
          style={{ textTransform: 'uppercase' }}
        >
          Username:{' '}
        </label>
        <input
          className="user-form-input"
          onChange={inputChange}
          value={value}
          type="text"
          placeholder="username"
        />
      </div>
    </div>
  );
};

export default UserInput;
