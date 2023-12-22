import "./App.css";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Seven React Projects
          </h1>
        </div>
      </div>
      <Project />
    </div>
  );
}

export default App;
