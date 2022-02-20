import './App.css';
import CompoundComponent from "./CompoundComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <header className="App-header">
        <p>
          Compound Component
        </p>
          <CompoundComponent />
      </header>
    </div>
  );
}

export default App;
