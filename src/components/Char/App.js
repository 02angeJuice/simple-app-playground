import '../../css/Char.css';
import React, { useState } from 'react';

import Validation from './Validation';
import CharComponent from './CharComponent';

const App = () => {
  const [text, setText] = useState('');

  const onCharClick = (i) => {
    const newChars = text.split('').filter((c, index) => index !== i);
    setText(newChars.join(''));
  };

  const renderSplitText = (text) => {
    return text.split('').map((text, i) => {
      return <CharComponent key={i} click={() => onCharClick(i)} text={text} />;
    });
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="char-message" style={{}}>
        {text}
        <Validation textLength={text.length} />
      </div>
      <input
        className="char-input"
        value={text}
        onChange={onInputChange}
        type="text"
      />

      {renderSplitText(text)}
    </>
  );
};

export default App;
