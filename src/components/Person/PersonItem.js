import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import Aux from './hoc/Aux';
import withClass from './hoc/withClass';
import AuthContext from './context/auth-context';

const PersonItem = ({ name, like, click, change, personLength }) => {
  const inputElementRef = useRef();
  const isAuth = useContext(AuthContext);

  useEffect(() => {
    inputElementRef.current.focus();
  }, []);

  return (
    <Aux>
      {isAuth.authenticated ? <p>Authenticated</p> : <p>Please login</p>}

      {personLength}

      <p onClick={click}>
        {like} {name}
      </p>

      <input ref={inputElementRef} type="text" onChange={change} value={name} />
    </Aux>
  );
};

PersonItem.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  like: PropTypes.string,
  change: PropTypes.func,
};

export default withClass(PersonItem, 'person-item');
