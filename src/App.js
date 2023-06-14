import "./App.css";
import ErrorBounday from "./components/ErrorBounday";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <ErrorBounday>
        <Hero heroName= "Batman" />
      </ErrorBounday>
      <ErrorBounday>
        <Hero heroName= "Superman" />
      </ErrorBounday>
      <ErrorBounday>
        <Hero heroName= "Joker" />
      </ErrorBounday>
    </div>
  );
}

export default App;
