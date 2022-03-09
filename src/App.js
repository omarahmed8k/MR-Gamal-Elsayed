// import logo from "./assets/logo.png";
import "./App.css";
import Header from "./components/Header";
import Background from "./components/Background";
import Whatsapp from "./components/Whatsapp";
import Study from "./components/Study";
import Youtube from "./components/Youtube";
import Experiance from "./components/Experiance";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Whatsapp />
      <Study />
      <Youtube />
      <Experiance />
      <Contact />
    </div>
  );
}

export default App;
