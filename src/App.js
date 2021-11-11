import './App.css';
import Link from './components/LinkComponent';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Link text='Морские млекопитающие из инфраотряда китообразных' className='link-info' href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%82%D1%8B" />
    </Fragment>
  );
}

export default App;
