import styled from 'styled-components';

export default function DropChoiceByProfessor({ type, dropProfessor, info }) {
  console.log({ type: type, info: info });

  return (
    <DropChoice visible={dropProfessor}>
      {type.map((j, key) => (
        <Choice key={key} visible={dropProfessor}>
          <h1>
            {j} (
            {info.map((i) => i.exam_type.name).filter((i) => i === j).length})
          </h1>
        </Choice>
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

  &:hover {
    background-color: rgba(254, 119, 177, 0.5);
  }
`;
