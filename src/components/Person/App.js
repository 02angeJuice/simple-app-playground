import React, { useState } from 'react';

import Person from './Person';
import styled from 'styled-components';

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

const PersonToggle = styled.button`
  box-shadow: 0 6px 8px -2px rgba(0, 0, 0, 0.2);
  background-color: papayawhip;
  margin-left: 3.32%;
  border: 0;
  outline: none;
  height: 50px;
  padding: 15px;
  font-size: 1.1rem;

  &:hover {
    box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    background-color: pink;
  }
`;

const App = () => {
  const [showPerson, setShowPerson] = useState(false);
  const [countPerson, setCountPerson] = useState(0);

  const countPersonHandler = (count) => setCountPerson(count);

  const togglePersonHandler = () => {
    setShowPerson(!showPerson ? true : false);
  };

  const personDisplay = () =>
    showPerson ? <Person count={countPersonHandler} /> : null;

  const renderSpan = (countPerson) => {
    // handler span by count
    return <span>This is really working</span>;
  };

  console.log(countPerson);

  return (
    <>
      <PersonHeadline>
        <PersonToggle onClick={togglePersonHandler}>Toggle</PersonToggle>

        {renderSpan(countPerson)}
      </PersonHeadline>

      {personDisplay()}
    </>
  );
};

export default App;
