import "./App.css";
import ExtensionGrid from "./components/extension-grid";
import Header from "./components/header";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Header />
        <ExtensionGrid />
      </div>
    </>
  );
}

export default App;
