import styled from 'styled-components';

export default function LastDrop({ lastDrop, examInfo }) {
  return <LastDropBox lastDrop={lastDrop}>{examInfo[0]?.name}</LastDropBox>;
}

const LastDropBox = styled.div`
  height: 40px;
  width: 100%;
  background: #f257b0;
  display: ${(props) => (props.lastDrop ? 'flex' : 'none')};
  align-items: center;
  border-radius: 5px;
  padding: 5px;
`;
