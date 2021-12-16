import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import styled from 'styled-components';
import { useState } from 'react';

export default function OptionProfessor({ professor }) {
  const [dropProfessor, setDropProfessor] = useState(false);

  const periodo = ['P1', 'P2', 'P3', '2CH', 'Outras'];
  return (
    <>
      <ChoiceBox>
        <h1>{professor}</h1>
        {dropProfessor ? (
          <BsArrowUp onClick={() => setDropProfessor(false)} />
        ) : (
          <BsArrowDown onClick={() => setDropProfessor(true)} />
        )}
      </ChoiceBox>
      <DropChoice visible={dropProfessor}>
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
`;
