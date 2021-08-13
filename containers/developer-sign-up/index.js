import { useEthers } from '@usedapp/core';
import DeveloperSignUpButton from 'containers/developer-sign-up-button';
import styles from './style.module.css';

function DeveloperSignUp() {
  const { account } = useEthers();

  return (
    <article className={styles['lock-info-wrapper']}>
      <header>
        <h1>Sign up as a developer</h1>
      </header>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </li>
        <li>Quis ipsum suspendisse ultrices gravida</li>
        <li>Risus commodo viverra maecenas accumsan lacus vel facilisis. </li>
        <li>Quis ipsum suspendisse ultrices gravida</li>
        <li>Risus commodo viverra maecenas accumsan lacus vel facilisis. </li>
      </ul>

      {account && <DeveloperSignUpButton />}
    </article>
  );
}

DeveloperSignUp.propTypes = {};

DeveloperSignUp.defaultProps = {};

export default DeveloperSignUp;
