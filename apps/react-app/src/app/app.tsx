// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { AddLoanDetailsProps } from '../../../../libs/Typings/types';

export function App() {
  return (
    <>
      <NxWelcome title="react-app" />
      <div />
    </>
  );
}

export default App;
