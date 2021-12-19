import { BsArrowDown } from 'react-icons/bs';
import styled from 'styled-components';
import { useState } from 'react';
import DropChoiceBySubject from './dropChoiceBySubject';

export default function OptionSubject({ semester, info }) {
  const [dropSubject, setDropSubject] = useState(false);

  return (
    <>
      <ChoiceBox dropSubject={dropSubject}>
        <h1>{semester.name}</h1>
        <BsArrowDown onClick={() => setDropSubject(!dropSubject)} />
      </ChoiceBox>
      <DropChoiceBySubject
        dropSubject={dropSubject}
        semester={semester}
        info={info}
      />
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

  svg {
    transition: all 0.4s;
    transform: ${(props) => (props.dropSubject ? 'rotateX(-180deg)' : 'none')};
  }

  ::placeholder {
    font-family: 'Tajawal', sans-serif;
    font-size: 20px;
    color: #000000;
  }
`;
