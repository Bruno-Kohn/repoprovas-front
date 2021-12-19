import styled from 'styled-components';

export default function LastDropProfessor({ lastDrop, examInfo }) {
  return (
    <LastDropBox
      href={examInfo[0]?.link}
      target={'_blank'}
      rel='noreferrer'
      lastDrop={lastDrop}
    >
      {examInfo[0]?.name} - {examInfo[0]?.subject.name}
    </LastDropBox>
  );
}

const LastDropBox = styled.a`
  height: 40px;
  width: 100%;
  background: #f257b0;
  display: ${(props) => (props.lastDrop ? 'flex' : 'none')};
  align-items: center;
  border-radius: 5px;
  padding: 5px;
`;
