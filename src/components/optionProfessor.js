import { BsArrowDown } from 'react-icons/bs';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DropChoiceByProfessor from './dropChoiceByProfessor.js';

export default function OptionProfessor({ professor, info }) {
  const [dropProfessor, setDropProfessor] = useState(false);
  const [exam_type, setExam_type] = useState([]);
  const num = info.find((i) => i.name === professor);

  useEffect(
    () => {
      const request = axios.get(`http://localhost:4000/exams/types`);

      request.then((response) => {
        setExam_type(response.data);
      });
      request.catch((error) => {
        console.log(error);
      });
    },
    //eslint-disable-next-line
    []
  );

  return (
    <>
      <ChoiceBox dropProfessor={dropProfessor}>
        <h1>
          {professor} ({num.exams.length})
        </h1>
        <BsArrowDown onClick={() => setDropProfessor(!dropProfessor)} />
      </ChoiceBox>
      <DropChoiceByProfessor
        type={exam_type}
        dropProfessor={dropProfessor}
        info={num.exams}
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
    transform: ${(props) =>
      props.dropProfessor ? 'rotateX(-180deg)' : 'none'};
  }

  ::placeholder {
    font-family: 'Tajawal', sans-serif;
    font-size: 20px;
    color: #000000;
  }
`;
