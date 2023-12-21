import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="body">
      <div className="container">
        <Header />
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
