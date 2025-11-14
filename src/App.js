import './App.css';
import Todo from './components/Todo';
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
          <Todo />
        </UrlapProvider>
      </article>
    </div>
  );
}

export default App;
