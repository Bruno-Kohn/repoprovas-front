import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import styled from 'styled-components';
import { useState } from 'react';

export default function OptionSubject({ subject }) {
  const [dropSubject, setDropSubject] = useState(false);

  const periodo = [
    '1º Período',
    '2º Período',
    '3º Período',
    '4º Período',
    '5º Período',
    '6º Período',
    '7º Período',
    '8º Período',
    '9º Período',
    '10º Período'
  ];
  return (
    <>
      <ChoiceBox>
        <h1>{subject}</h1>
        {dropSubject ? (
          <BsArrowUp onClick={() => setDropSubject(false)} />
        ) : (
          <BsArrowDown onClick={() => setDropSubject(true)} />
        )}
      </ChoiceBox>
      <DropChoice visible={dropSubject}>
        {periodo.map((j) => (
          <Choice>
            <h1>{j}</h1>
          </Choice>
        ))}
      </DropChoice>
    </>
  );
}

const ChoiceBox = styled.div`
  width: 326px;
  height: 45px;
  background-color: #3fe3f2;
  border-radius: 5px;
  border: none;
  margin: 0 auto 10px auto;
  padding: 0px 10px 0px 15px;
  font-family: 'Tajawal', sans-serif;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ::placeholder {
    font-family: 'Tajawal', sans-serif;
    font-size: 20px;
    color: #000000;
  }
`;

const DropChoice = styled.div`
  width: 326px;
  height: auto;
  margin: -10px auto 10px auto;
  border-radius: 5px;
  background: rgba(63, 227, 242, 0.5);
  font-family: 'Tajawal', sans-serif;
  padding: 5px;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  h1 {
    font-size: 15px;
  }
`;

const Choice = styled.div`
  width: 100%;
  height: auto;
  margin: 3px 0;
  padding: 5px;
  cursor: pointer;
  border-radius: 3px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(254, 119, 177, 0.5);
  }
`;
