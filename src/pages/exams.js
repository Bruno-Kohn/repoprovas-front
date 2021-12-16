import styled from 'styled-components';

export default function Exams() {
  return (
    <>
      <Container>
        <Title>
          <h1>RepoProvas</h1>
          <h2>Filtrar por:</h2>
        </Title>
        <Options>
          <Button>
            <h1>PROFESSORES</h1>
          </Button>
          <Button>
            <h1>DISCIPLINAS</h1>
          </Button>
        </Options>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 900px;
  height: 200px;
  margin-top: calc((100vh / 2) - 200px / 2);
  margin-left: calc((100vw / 2) - 900px / 2);
`;

const Title = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 40px;
    color: #ffffff;
  }

  h2 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 20px;
    color: #ffffff;
    margin: 15px 0;
  }
`;

const Options = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #f257b0;
  width: 135px;
  height: 50px;
  border-radius: 5px;
  border: none;
  margin-right: 15px;
  padding: 20px;

  h1 {
    font-family: 'Tajawal', sans-serif;
  }
`;
