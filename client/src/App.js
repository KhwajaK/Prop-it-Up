import './App.css';
import Header from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <Header lastName={"Doe"} firstName={"Jane"} initialAge={45} hairColor={"Black"}/>
      <Header lastName={"Smith"} firstName={"John"} initialAge={88} hairColor={"Brown"}/>
      <Header lastName={"Fillmore"} firstName={"Millard"} initialAge={50} hairColor={"Brown"}/>
      <Header lastName={"Smith"} firstName={"Maria"} initialAge={62} hairColor={"Brown"}/>
    </div>
  );
}

export default App;
