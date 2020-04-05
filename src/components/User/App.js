import '../../css/User.css';
import React, { useState } from 'react';

import UserInput from './UserInput';
import UserOutput from './UserOutput';

const App = () => {
  const [username, setUsername] = useState('');

  const changeHandler = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="user">
      <UserInput value={username} inputChange={changeHandler} />
      <UserOutput username={username} />
      <UserOutput username={username} />
    </div>
  );
};

export default App;
