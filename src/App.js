import logo from "./logo.svg";
import "./App.css";
import Router from "./routes/MyRouter";
import MyRouter from "./routes/MyRouter";

function App() {
  return (
    <div className="App bg-black w-full h-full">
      <div className="container mx-auto">
        <MyRouter />
      </div>
    </div>
  );
}

export default App;
