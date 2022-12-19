import StatisticLine from './StatisticLine';

const Statistics = ({ good, bad, neutral, total }) => {
  const percentage = (Value, totalValue) => {
    return (100 * Value) / totalValue;
  };

  const average = (good, bad, total) => (good - bad) / total;

  return (
    <>
      <h2>Statistics</h2>
      {total ? (
        <table border='1'>
          <StatisticLine text='Good' value={good} />
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='Total' value={total} />
          <StatisticLine text='Average' value={average(good, bad, total)} />
          <StatisticLine
            text='Positive'
            value={`${percentage(good, total)}%`}
          />
        </table>
      ) : (
        'No Feeback given'
      )}
    </>
  );
};

export default Statistics;
