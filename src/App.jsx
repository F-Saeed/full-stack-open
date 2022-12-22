import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ];

  const [selected, setSelected] = useState(0);

  const randomAnecdote = (arr) => {
    const random = () => Math.floor(Math.random() * arr.length);

    setSelected(random());
  };

  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  const largestKey = (obj) =>
    Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));

  console.log(points);
  console.log(largestKey(points));

  const handleVote = () => {
    const updatePoint = selected + 1;

    setPoints({ ...points, updatePoint });
    console.log(points);
  };

  return (
    <div>
      {anecdotes[selected]}
      <br />
      has {points[selected]} votes
      <br />
      <button type='button' onClick={handleVote}>
        Vote
      </button>
      <button type='button' onClick={() => randomAnecdote(anecdotes)}>
        Next Anecdote
      </button>
    </div>
  );
};

export default App;
