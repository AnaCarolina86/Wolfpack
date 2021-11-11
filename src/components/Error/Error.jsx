import styles from './Error.module.css';

export default function Error({ children: errorMessage }) {
  return (
    <span className={styles.errorMessage}>
      {errorMessage}
    </span>
  );
}
