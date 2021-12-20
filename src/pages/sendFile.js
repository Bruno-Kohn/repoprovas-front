import styled from 'styled-components';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SendFiles() {
  const navigate = useNavigate();
  const [dropCategory, setDropCategory] = useState(false);
  const [dropSubject, setDropSubject] = useState(false);
  const [dropProfessor, setDropProfessor] = useState(false);
  const [nome, setNome] = useState('');
  const [link, setLink] = useState('');
  const [categoria, setCategoria] = useState([]);
  const [categoriaEsc, setCategoriaEsc] = useState({ name: '' });
  const [disciplina, setDisciplina] = useState([]);
  const [disciplinaEsc, setDisciplinaEsc] = useState({ name: '' });
  const [professor, setProfessor] = useState([]);
  const [professorEsc, setProfessorEsc] = useState({ name: '' });

  console.log(
    professor.filter((i) =>
      i.exams.some((j) => j.subject_id === disciplinaEsc.id)
    ),
    'aqui'
  );
  console.log(disciplina);

  useEffect(
    () => {
      const request = axios.get(`http://localhost:4000/exams/types`);

      request.then((response) => {
        setCategoria(response.data);
      });
      request.catch((error) => {
        console.log(error);
      });
    },
    //eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      const request = axios.get(`http://localhost:4000/semester/subjects`);

      request.then((response) => {
        setDisciplina(response.data);
      });
      request.catch((error) => {
        console.log(error);
      });
    },
    //eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      const request = axios.get(`http://localhost:4000/professors/exams`);

      request.then((response) => {
        setProfessor(response.data);
      });
      request.catch((error) => {
        console.log(error);
      });
    },
    //eslint-disable-next-line
    []
  );

  function enviarProva(e) {
    e.preventDefault();
    const request = axios.post('http://localhost:4000/exams', {
      name: nome,
      link: link,
      exam_type_id: categoriaEsc.id,
      professor_id: professorEsc.id,
      subject_id: disciplinaEsc.id
    });

    request.then(() => navigate('/'));
    request.catch((error) => console.log(error));
  }

  return (
    <Container>
      <Holder>
        <Logo>RepoProvas</Logo>
        <ContainerForm>
          <form onSubmit={enviarProva}>
            <InputForm
              type='text'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder='Nome'
              required
            />
            <InputForm
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder='Link'
              required
              type='url'
            />
            <ContainerChoiceBox>
              <ChoiceBox>
                <h1>{categoriaEsc?.name ? categoriaEsc.name : 'Categoria'}</h1>
                {dropCategory ? (
                  <BsArrowUp onClick={() => setDropCategory(false)} />
                ) : (
                  <BsArrowDown onClick={() => setDropCategory(true)} />
                )}
              </ChoiceBox>
              <DropChoice visible={dropCategory}>
                {categoria.map((j) => (
                  <Choice
                    onClick={() => {
                      setCategoriaEsc(j);
                      setDropCategory(false);
                    }}
                  >
                    <h1>{j.name}</h1>
                  </Choice>
                ))}
              </DropChoice>
            </ContainerChoiceBox>
            <ContainerChoiceBox>
              <ChoiceBox>
                <h1>
                  {disciplinaEsc?.name ? disciplinaEsc.name : 'Disciplina'}
                </h1>
                {dropSubject ? (
                  <BsArrowUp onClick={() => setDropSubject(false)} />
                ) : (
                  <BsArrowDown onClick={() => setDropSubject(true)} />
                )}
              </ChoiceBox>
              <DropChoice visible={dropSubject}>
                {disciplina
                  .map((i) => i.subject)
                  .map((j) => (
                    <Choice
                      onClick={() => {
                        setDisciplinaEsc(j[0]);
                        setDropSubject(false);
                      }}
                    >
                      <h1>{j[0].name}</h1>
                    </Choice>
                  ))}
              </DropChoice>
            </ContainerChoiceBox>
            <ContainerChoiceBox>
              <ChoiceBox>
                <h1>{professorEsc?.name ? professorEsc.name : 'Professor'}</h1>
                {dropProfessor ? (
                  <BsArrowUp onClick={() => setDropProfessor(false)} />
                ) : (
                  <BsArrowDown onClick={() => setDropProfessor(true)} />
                )}
              </ChoiceBox>
              <DropChoice visible={dropProfessor}>
                {professor
                  .filter((i) =>
                    i.exams.some((j) => j.subject_id === disciplinaEsc.id)
                  )
                  .map((j) => (
                    <Choice
                      onClick={() => {
                        setProfessorEsc(j);
                        setDropProfessor(false);
                      }}
                    >
                      <h1>{j.name}</h1>
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
