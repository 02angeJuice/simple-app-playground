import React, { useRef, useEffect } from 'react';

import AuthContext from './context/auth-context';

const Cockpit = ({ click }) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    toggleBtnRef.current.click();
  }, []);

  return (
    <>
      <button ref={toggleBtnRef} className="person-toggle" onClick={click}>
        Toggle
      </button>
      <AuthContext.Consumer>
        {(context) => (
          <button className="person-login" onClick={context.login}>
            Login
          </button>
        )}
      </AuthContext.Consumer>
    </>
  );
};

export default Cockpit;
