import styled from 'styled-components';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { useState } from 'react';

export default function Exams() {
  const [dropBruno, setDropBruno] = useState(false);
  const [dropPedro, setDropPedro] = useState(false);
  const [dropAndrezza, setDropAndrezza] = useState(false);
  const [dropYohan, setDropYohan] = useState(false);
  const categoria = ['P1', 'P2', 'P3', '2CH', 'Outras'];

  return (
    <>
      <Container>
        <Title>
          <h1>RepoProvas</h1>
          <h2>Selecione o professor e sua respectiva prova</h2>
        </Title>
        <ContainerChoiceBox>
          <ChoiceBox>
            <h1>Bruno Kohn</h1>
            {dropBruno ? (
              <BsArrowUp onClick={() => setDropBruno(false)} />
            ) : (
              <BsArrowDown onClick={() => setDropBruno(true)} />
            )}
          </ChoiceBox>
          <DropChoice visible={dropBruno}>
            {categoria.map((j) => (
              <Choice>
                <h1>{j}</h1>
              </Choice>
            ))}
          </DropChoice>
        </ContainerChoiceBox>
        <ContainerChoiceBox>
          <ChoiceBox>
            <h1>Pedro Lucas</h1>
            {dropPedro ? (
              <BsArrowUp onClick={() => setDropPedro(false)} />
            ) : (
              <BsArrowDown onClick={() => setDropPedro(true)} />
            )}
          </ChoiceBox>
          <DropChoice visible={dropPedro}>
            {categoria.map((j) => (
              <Choice>
                <h1>{j}</h1>
              </Choice>
            ))}
          </DropChoice>
        </ContainerChoiceBox>
        <ContainerChoiceBox>
          <ChoiceBox>
            <h1>Andrezza Soares</h1>
            {dropAndrezza ? (
              <BsArrowUp onClick={() => setDropAndrezza(false)} />
            ) : (
              <BsArrowDown onClick={() => setDropAndrezza(true)} />
            )}
          </ChoiceBox>
          <DropChoice visible={dropAndrezza}>
            {categoria.map((j) => (
              <Choice>
                <h1>{j}</h1>
              </Choice>
            ))}
          </DropChoice>
        </ContainerChoiceBox>
        <ContainerChoiceBox>
          <ChoiceBox>
            <h1>Yohan Lopes</h1>
            {dropYohan ? (
              <BsArrowUp onClick={() => setDropYohan(false)} />
            ) : (
              <BsArrowDown onClick={() => setDropYohan(true)} />
            )}
          </ChoiceBox>
          <DropChoice visible={dropYohan}>
            {categoria.map((j) => (
              <Choice>
                <h1>{j}</h1>
              </Choice>
            ))}
          </DropChoice>
        </ContainerChoiceBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 900px;
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
