import holberton_logo from './holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
      <header className='App-header'>
        <img src={holberton_logo} alt='logo' />
        <h1>School dashboard</h1>
      </header>
      <main role='main' className='App-body'>
        <p>Login to access the full dashboard</p>
      </main>
      <footer className='App-footer'>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </>
  );
}

export default App;
