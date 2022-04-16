import "./App.css";
import Navbar from "./components/Navbar";
import CreatePlanner from "./components/CreatePlanner";

function App() {
  //http://localhost:3002
  const title = "Page to create schedule**";
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <h1>{title}</h1>
        <CreatePlanner></CreatePlanner>
      </div>
    </div>
  );
}

export default App;
