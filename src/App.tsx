import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App-container">
      <HeaderComponent />
      <div className="App-content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
