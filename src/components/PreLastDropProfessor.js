import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';
import { useState } from 'react';
import LastDropPorfessor from './lastDropProfessor';

export default function PreLastDropProfessor({ info, j, dropProfessor }) {
  const [lastDrop, setLastDrop] = useState(false);

  const exams = info.filter((k) => k.exam_type_id === j.id);
  return (
    <>
      <Choice key={j.id} visible={dropProfessor}>
        <h1>
          {j.name} ({exams.length})
        </h1>
        <IoIosArrowDown onClick={() => setLastDrop(!lastDrop)} />
      </Choice>
      <LastDropPorfessor lastDrop={lastDrop} examInfo={exams} />
    </>
  );
}

const Choice = styled.div`
  width: 100%;
  height: ${(props) => (props.visible ? 'auto' : '0px')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  margin: 3px 0;
  padding: 5px;
  cursor: pointer;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: rgba(254, 119, 177, 0.5);
  }
`;
