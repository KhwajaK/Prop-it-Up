import './App.css';
import Header from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <Header lastName={"Doe"} firstName={"Jane"} age={"45"} hairColor={"Black"}/>
      <Header lastName={"Smith"} firstName={"John"} age={"88"} hairColor={"Brown"}/>
      <Header lastName={"Fillmore"} firstName={"Millard"} age={"50"} hairColor={"Brown"}/>
      <Header lastName={"Smith"} firstName={"Maria"} age={"62"} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
