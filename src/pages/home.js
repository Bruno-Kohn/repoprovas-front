import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Container>
        <Title>
          <h1>RepoProvas</h1>
        </Title>
        <Options>
          <Link to='/exams'>
            <Button>
              <h1>ACESSAR PROVAS</h1>
            </Button>
          </Link>
          <Link to='/send-file'>
            <Button>
              <h1>ENVIAR PROVA</h1>
            </Button>
          </Link>
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

  h1 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 40px;
    color: #ffffff;
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
  cursor: pointer;

  h1 {
    font-family: 'Tajawal', sans-serif;
  }
`;
