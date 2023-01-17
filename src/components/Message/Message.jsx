// Styles
import styles from './Message.module.css';

const Message = ({ message }) => {
  return message === null ? null : (
    <div className={styles.message}>{message}</div>
  );
};

export default Message;
