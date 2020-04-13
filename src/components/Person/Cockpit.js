import React, { useRef, useEffect, useContext } from 'react';

import AuthContext from './context/auth-context';

const Cockpit = ({ click }) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    toggleBtnRef.current.click();
  }, []);

  return (
    <>
      <button ref={toggleBtnRef} className="person-toggle" onClick={click}>
        Toggle
      </button>
      <button className="person-login" onClick={authContext.login}>
        Login
      </button>
    </>
  );
};

export default Cockpit;
