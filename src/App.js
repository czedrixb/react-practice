import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto px-6 py-10">
        <Home />
      </div>
    </div>
  );
}

export default App;
