import { useState } from 'react';
import Button from './components/Button';
import Statistics from './components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div>
      <Button setState={setGood} setTotal={setTotal} text='Good' />
      <Button setState={setNeutral} setTotal={setTotal} text='Neutral' />
      <Button setState={setBad} setTotal={setTotal} text='Bad' />
      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </div>
  );
};

export default App;
