import React from 'react';
import Aux from '../../hoc/Aux';
import WitchClass from '../../hoc/WithClass';

const PersonItem = ({ name, like, click, change, personLength }) => {
  return (
    <WitchClass classes="person-item">
      {personLength}
      <p onClick={click}>
        {like} {name}
      </p>

      <input type="text" onChange={change} value={name} />
    </WitchClass>
  );
};

export default PersonItem;
