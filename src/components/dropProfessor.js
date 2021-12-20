import OptionProfessor from './optionProfessor';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DropProfessor() {
  const [professorInfo, setProfessorInfo] = useState([]);
  const professor = professorInfo.map((i) => i.name);

  useEffect(
    () => {
      const request = axios.get(
        `${
          process.env.NODE_ENV === 'production'
            ? 'https://repoprovas-app-back.herokuapp.com'
            : process.env.NODE_ENV === 'development'
            ? 'http://localhost:4000'
            : 'http://localhost:4001'
        }/professors/exams`
      );

      request.then((response) => {
        setProfessorInfo(response.data);
      });
      request.catch((error) => {
        console.log(error);
      });
    },
    //eslint-disable-next-line
    []
  );

  return (
    <>
      {professor.map((i, key) => (
        <OptionProfessor professor={i} info={professorInfo} />
      ))}
    </>
  );
}
