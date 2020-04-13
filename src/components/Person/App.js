import React, { useState } from 'react';
import '../../css/Person.css';
import Person from './Person';
import Cockpit from './Cockpit';
import styled from 'styled-components';
import AuthContext from './context/auth-context';

const PersonHeadline = styled.div`
  font-size: 1.2rem;
  margin-top: 15px;

  span {
    margin-left: 15px;
  }

  span:hover {
    cursor: pointer;
    color: crimson;
    text-transform: uppercase;
  }
`;

const App = () => {
  const [showPerson, setShowPerson] = useState(false);
  const [countPerson, setCountPerson] = useState(0);
  const [auth, setAuth] = useState(false);

  const countPersonHandler = (count) => {
    setCountPerson(count);
  };

  const togglePersonHandler = () => {
    setShowPerson(!showPerson ? true : false);
  };

  const loginHandler = () => {
    setAuth(true);
  };

  const personDisplay = () => {
    if (!showPerson) {
      return null;
    }

    return <Person count={countPersonHandler} isAuth={auth} />;
  };

  const renderSpan = (countPerson) => {
    // handler span by count
    return <span>This is really working {countPerson}</span>;
  };

  return (
    <>
      <AuthContext.Provider
        value={{ authenticated: auth, login: loginHandler }}
      >
        <PersonHeadline>
          <Cockpit click={togglePersonHandler} />

          {renderSpan(countPerson)}
        </PersonHeadline>

        {personDisplay()}
      </AuthContext.Provider>
    </>
  );
};

export default App;
