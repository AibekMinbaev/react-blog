import Header from "./components/Header.jsx"
import CoreConcepts from "./components/CoreConcepts.jsx"
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <CoreConcepts/>
        <Examples/>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
