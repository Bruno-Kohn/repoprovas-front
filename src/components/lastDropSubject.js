import styled from 'styled-components';

export default function LastDropSubject({ lastDrop, info }) {
  console.log(info, 'opa');
  return info.map((i) => (
    <LastDropBox lastDrop={lastDrop}>
      {i.exam_type.name} - {i.name} - {i.professor.name}
    </LastDropBox>
  ));
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
