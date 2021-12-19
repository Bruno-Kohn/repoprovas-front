import OptionProfessor from './optionProfessor';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DropProfessor() {
  const [professorInfo, setProfessorInfo] = useState([]);
  const professor = professorInfo.map((i) => i.name);

  useEffect(
    () => {
      const request = axios.get(`http://localhost:4000/professors/exams`);

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
