import OptionProfessor from './optionProfessor';

export default function DropProfessor() {
  const professor = [
    'BRUNO KOHN',
    'PEDRO LUCAS',
    'YOHAN LOPES',
    'ANDREZZA SOARES'
  ];

  return (
    <>
      {professor.map((i) => (
        <>
          <OptionProfessor professor={i} />
        </>
      ))}
    </>
  );
}
