import styled from 'styled-components';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { useState } from 'react';

export default function Home() {
  const [dropCategory, setDropCategory] = useState(false);
  const [dropSubject, setDropSubject] = useState(false);
  const categoria = ['P1', 'P2', 'P3', '2CH', 'Outras'];
  const disciplina = [
    'HTML',
    'CSS',
    'Javascript',
    'React',
    'NodeJS',
    'PostgreSQL',
    'Typescript'
  ];
  return (
    <Container>
      <Holder>
        <Logo>RepoProvas</Logo>
        <ContainerForm>
          <form>
            <InputForm
              type='text'
              //value={name}
              //onChange={(e) => setName(e.target.value)}
              placeholder='Nome'
              //disabled={clicked}
            />
            <InputForm
              type='email'
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              placeholder='Link'
              //disabled={clicked}
            />
            <ContainerChoiceBox>
              <ChoiceBox>
                <h1>Categoria</h1>
                {dropCategory ? (
                  <BsArrowUp onClick={() => setDropCategory(false)} />
                ) : (
                  <BsArrowDown onClick={() => setDropCategory(true)} />
                )}
              </ChoiceBox>
              <DropChoice visible={dropCategory}>
                {categoria.map((i) => (
                  <Choice>
                    <h1>{i}</h1>
                  </Choice>
                ))}
              </DropChoice>
            </ContainerChoiceBox>
            <ContainerChoiceBox>
              <ChoiceBox>
                <h1>Disciplina</h1>
                {dropSubject ? (
                  <BsArrowUp onClick={() => setDropSubject(false)} />
                ) : (
                  <BsArrowDown onClick={() => setDropSubject(true)} />
                )}
              </ChoiceBox>
              <DropChoice visible={dropSubject}>
                {disciplina.map((i) => (
                  <Choice>
                    <h1>{i}</h1>
                  </Choice>
                ))}
              </DropChoice>
            </ContainerChoiceBox>

            <SendFileButton type='submit'>ENVIAR ARQUIVO</SendFileButton>
          </form>
        </ContainerForm>
      </Holder>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  min-height: 765px;
  width: 100vw;
`;

const Holder = styled.div`
  height: auto;
  padding-top: calc(100vh / 5);
  padding-bottom: 40px;
`;

const Logo = styled.h1`
  font-size: 32px;
  line-height: 50px;
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  margin-bottom: 25px;
  color: #fff;
`;

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 0 auto;
  text-align: center;
`;

const InputForm = styled.input`
  width: 326px;
  height: 45px;
  background-color: #3fe3f2;
  border-radius: 5px;
  border: none;
  margin-bottom: 15px;
  padding: 20px 0 20px 15px;
  font-family: 'Tajawal', sans-serif;
  font-size: 20px;

  ::placeholder {
    font-family: 'Tajawal', sans-serif;
    font-size: 20px;
    color: #000000;
  }
`;

const ContainerChoiceBox = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 15px;
`;

const ChoiceBox = styled.div`
  width: 326px;
  height: 45px;
  background-color: #3fe3f2;
  border-radius: 5px;
  border: none;
  margin: 0 auto;
  padding: 0px 10px 0px 15px;
  font-family: 'Tajawal', sans-serif;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ::placeholder {
    font-family: 'Tajawal', sans-serif;
    font-size: 20px;
    color: #000000;
  }
`;

const DropChoice = styled.div`
  width: 326px;
  height: auto;
  margin: 0 auto;
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
`;

const SendFileButton = styled.button`
  width: 326px;
  height: 45px;
  border-radius: 5px;
  background-color: #f257b0;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;
  cursor: pointer;
`;
