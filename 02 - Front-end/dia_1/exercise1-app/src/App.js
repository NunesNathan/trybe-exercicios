import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arr = ['Trybe stuff', 'family time', 'my own project']

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {arr.map((toDo) => Task(toDo))} 
      </header>
    </div>
  );
}

export default App;
