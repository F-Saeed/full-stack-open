const Button = ({ setState, setTotal, text }) => {
  const handleClick = () => {
    setState((state) => state + 1);
    setTotal((state) => state + 1);
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
