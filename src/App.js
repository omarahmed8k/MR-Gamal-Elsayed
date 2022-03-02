// import logo from "./assets/logo.png";
import "./App.css";
import Header from "./components/Header";
import Background from "./components/Background";
import Whatsapp from "./components/Whatsapp";
import Study from "./components/Study";

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Whatsapp />
      <Study />
    </div>
  );
}

export default App;
