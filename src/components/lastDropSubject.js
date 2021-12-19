import styled from 'styled-components';

export default function LastDropSubject({ lastDrop, info }) {
  return info.map((i) => (
    <LastDropBox
      href={i.link}
      target={'_blank'}
      rel='noreferrer'
      lastDrop={lastDrop}
    >
      {i.exam_type.name} - {i.name} - {i.professor.name}
    </LastDropBox>
  ));
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
