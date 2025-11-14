import './App.css';
import Urlap from './components/Urlap';
import { UrlapProvider } from './contexts/UrlapContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo</h1>
      </header>
      <article>
        <UrlapProvider>
          <Urlap />
        </UrlapProvider>
      </article>
    </div>
  );
}

export default App;
