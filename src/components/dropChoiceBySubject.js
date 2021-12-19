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
  height: ${(props) => (props.visible ? 'auto' : '0px')};
  margin: -10px auto 10px auto;
  border-radius: 5px;
  background: rgba(63, 227, 242, 0.5);
  font-family: 'Tajawal', sans-serif;
  padding: 5px;
  transition: all 0.4s;
  transform: ${(props) => (props.visible ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  flex-direction: column;
  opacity: ${(props) => (props.visible ? 1 : 0)};

  h1 {
    font-size: 15px;
    transition: all 0.4s;
    opacity: ${(props) => (props.visible ? 1 : 0)};
  }
`;
