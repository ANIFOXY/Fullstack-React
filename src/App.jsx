import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Videos from "./components/Video";
import Forms from "./components/Forms";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <List titulo='Minha tela exemplo'/>
        <Videos />
        <Forms />
      </main>
      <Footer />
    </>
  );
}

export default App;
