import "./App.css";
import MainNav from "./components/MainNav";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
    <Navbar></Navbar>
    <MainNav></MainNav>
      <Home></Home>
    </>
  );
}

export default App;
