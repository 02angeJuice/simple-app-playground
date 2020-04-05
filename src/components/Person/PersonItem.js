import React from 'react';
import styled from 'styled-components';

const PersonItemDiv = styled.div`
  @media (max-width: 500px) {
    width: 450px;
  }
  @media (min-width: 501px) {
    width: 46.68%;
  }
  @media (min-width: 998px) {
    width: 30%;
  }
  @media (min-width: 1376px) {
    width: 13.34%;
  }

  width: 30%;
  margin: 1.66%;
  display: inline-block;
  padding: 15px 0;
  background-color: papayawhip;
  box-shadow: 0 6px 8px -2px rgba(0, 0, 0, 0.2);
  text-align: center;

  &:hover {
    box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.2);
    color: deeppink;
    transition: transform 0.2s;
    transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
  }
`;

const PersonItemParagraph = styled.p`
  &:hover {
    cursor: pointer;
    color: deeppink;
    text-transform: uppercase;
    transform: scale(1.1);
    transition: transform 0.1s;
  }
`;

const PersonItemInput = styled.input`
  border: 0;
  width: 130px;
  outline: none;
  height: 25px;
  font-size: 1rem;
  text-align: center;
`;

const PersonItem = ({ name, like, click, change }) => {
  return (
    <PersonItemDiv>
      <PersonItemParagraph onClick={click}>
        {like} {name}
      </PersonItemParagraph>

      <PersonItemInput type="text" onChange={change} value={name} />
    </PersonItemDiv>
  );
};

export default PersonItem;
