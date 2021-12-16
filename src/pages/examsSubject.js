import styled from 'styled-components';
import DropSubject from '../components/dropSubject';

export default function ExamsSubject() {
  return (
    <>
      <Container>
        <Title>
          <h1>RepoProvas</h1>
          <h2>Selecione a disciplina e sua respectiva prova</h2>
        </Title>
        <ContainerChoiceBox>
          <DropSubject />
        </ContainerChoiceBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 35px auto 0 auto;
`;

const Title = styled.div`
  margin: 0 auto;
  width: 326px;
  height: 80px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    font-size: 32px;
    font-family: 'Josefin Sans', sans-serif;
    color: #fff;
  }

  h2 {
    font-size: 15px;
    font-family: 'Josefin Sans', sans-serif;
    color: #fff;
  }
`;

const ContainerChoiceBox = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 15px;
`;
