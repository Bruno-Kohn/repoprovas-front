import styled from 'styled-components';
import PreLastDropSubject from './preLastDropSubject';

export default function DropChoiceBySubject({ dropSubject, semester, info }) {
  return (
    <DropChoice visible={dropSubject}>
      {semester.subject.map((j) => (
        <PreLastDropSubject info={info} j={j} num={j.exams} />
      ))}
    </DropChoice>
  );
}

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
