import './App.css';

const Person = (p) => {
  return (
    <>
    <h1>Hi, {p.name}</h1>
    </>
  )
}

const App = () => {

  return (
    <div className="App">
    <Person name='John'/>
    </div>
  );
}

export default App;
