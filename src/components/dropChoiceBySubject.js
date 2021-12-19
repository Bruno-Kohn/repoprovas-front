import styled from 'styled-components';

export default function DropChoiceBySubject({ dropSubject, semester, info }) {
  console.log(info);
  return (
    <DropChoice visible={dropSubject}>
      {semester.subject.map((j) => (
        <Choice>
          <h1>{j.name}</h1>
        </Choice>
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
