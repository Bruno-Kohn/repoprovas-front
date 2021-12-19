import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';
import { useState } from 'react';
import LastDropSubject from './lastDropSubject.js';

export default function PreLastDropSubject({ j, num }) {
  const [lastDrop, setLastDrop] = useState(false);
  return (
    <>
      <Choice>
        <h1>
          {j.name} ({num.length})
        </h1>
        <IoIosArrowDown onClick={() => setLastDrop(!lastDrop)} />
      </Choice>
      <LastDropSubject lastDrop={lastDrop} info={num} />
    </>
  );
}

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
