import styled from 'styled-components';

export default function Home() {
  const categoria = ['P1', 'P2', 'P3', '2CH', 'Outras'];
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
            <InputForm
              type='password'
              //value={password}
              //onChange={(e) => setPassword(e.target.value)}
              placeholder='Categoria'
              //disabled={clicked}
            />
            <InputForm
              type='password'
              //value={passwordConfirmation}
              //onChange={(e) => setPasswordConfirmation(e.target.value)}
              placeholder='Disciplina'
              //disabled={clicked}
            />
            <SendFileButton type='submit'>ENVIAR ARQUIVO</SendFileButton>
          </form>
        </ContainerForm>
      </Holder>
    </Container>
  );
}

/*
 <DropChoiceInfo visible={drop}>
              {siglas.map((i) => (
                <State
                  onClick={() => {
                    setEstado(i);
                    setDrop(false);
                  }}
                >
                  <h1>{i}</h1>
                </State>
              ))}
            </DropChoiceInfo>

            const DropChoiceInfo = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 5px;
  background-color: rgb(224, 209, 237);
  padding: 5px;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  overflow: scroll;
  h1 {
    margin-left: 5px;
    font-size: 18px;
    color: #4d65a8;
  }
`;

const State = styled.div`
  width: 100%;
  height: auto;
  margin: 3px 0;
`;
*/

//----- Styled Components

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Holder = styled.div`
  height: auto;
  padding-top: calc(100vh / 5);
`;

const Logo = styled.h1`
  font-size: 32px;
  line-height: 50px;
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  margin-bottom: 25px;
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
  margin-bottom: 30px;
`;
