import Part from './Part';

const Content = ({ parts, exercises }) => {
  return (
    <>
      <Part part={parts.part1} exercise={exercises.exercises1} />
      <Part part={parts.part1} exercise={exercises.exercises1} />
      <Part part={parts.part1} exercise={exercises.exercises1} />
    </>
  );
};

export default Content;
