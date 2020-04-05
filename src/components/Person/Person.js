import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import usePersons from './usePersons';
import PersonItem from './PersonItem';

const PersonDiv = styled.div`
  padding: 1.66%;
  margin: 15px 0;
`;

const Person = ({ count }) => {
  const getPersons = usePersons();
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    if (!persons.length) {
      setPersons(getPersons);
    }
  }, [persons]);

  const deletePersonHandler = (id) => {
    const currentPersons = persons.filter((person) => {
      return person.id !== id;
    });

    setPersons(currentPersons);

    count(persons.length);
  };

  const inputChangeHandler = (e, id) => {
    const personIndex = persons.findIndex((person) => {
      return person.id === id;
    });

    const person = {
      ...persons[personIndex],
    };
    person.name = e.target.value;

    const newPersons = [...persons];
    newPersons[personIndex] = person;

    setPersons(newPersons);
  };

  const renderPerson = () => {
    return persons.map((person) => {
      return (
        <PersonItem
          click={() => deletePersonHandler(person.id)}
          name={person.name}
          like={person.like}
          key={person.id}
          change={(e) => inputChangeHandler(e, person.id)}
        />
      );
    });
  };

  return <PersonDiv>{renderPerson()}</PersonDiv>;
};

export default Person;
