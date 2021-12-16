import OptionSubject from './optionSubject';

export default function DropSubject() {
  const subject = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'REACT',
    'NODEJS',
    'POSTGRESQL',
    'TYPESCRIPT'
  ];

  return (
    <>
      {subject.map((i) => (
        <>
          <OptionSubject subject={i} />
        </>
      ))}
    </>
  );
}
