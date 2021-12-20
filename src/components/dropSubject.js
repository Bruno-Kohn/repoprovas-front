import OptionSubject from './optionSubject';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DropSubject() {
  const [subjectReq, setSubjectReq] = useState([]);

  useEffect(
    () => {
      const request = axios.get(
        `${
          process.env.NODE_ENV === 'production'
            ? 'https://repoprovas-app-back.herokuapp.com'
            : process.env.NODE_ENV === 'development'
            ? 'http://localhost:4000'
            : 'http://localhost:4001'
        }/semester/subjects`
      );

      request.then((response) => {
        setSubjectReq(response.data);
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
      {subjectReq.map((i) => (
        <>
          <OptionSubject semester={i} info={subjectReq} />
        </>
      ))}
    </>
  );
}
