const Total = ({ parts }) => {
  return (
    <h4>
      Total of exercises{' '}
      {Object.values(parts).reduce((sum, { exercises }) => sum + exercises, 0)}
    </h4>
  );
};

export default Total;
