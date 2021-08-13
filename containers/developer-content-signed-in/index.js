import styles from './style.module.css';

function DeveloperContentSignedIn() {
  return (
    <article className={styles['lock-info-wrapper']}>
      <header>
        <h1>Welcome back developer!</h1>
      </header>
    </article>
  );
}

DeveloperContentSignedIn.propTypes = {};

DeveloperContentSignedIn.defaultProps = {};

export default DeveloperContentSignedIn;
