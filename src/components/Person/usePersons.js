import { useState, useEffect } from 'react';

export default () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    setPersons([
      { id: 2, name: 'Apple', like: '🍎' },
      { id: 8, name: 'Grape', like: '🍇' },
      { id: 6, name: 'Water Melon', like: '🍉' },
      { id: 7, name: 'Orange', like: '🍊' },
      { id: 9, name: 'Banana', like: '🍌' },
      { id: 10, name: 'Cherry', like: '🍒' },
    ]);
  }, []);

  return [...persons];
};
