import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./components/Data";
import Home from "./components/Home";
import StravaContextProvider from "./context/StravaContext";
import Nav from "./components/Nav";
import User from "./Pages/User";

function App() {
  return (
    <div className="App">
      <StravaContextProvider>
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/redirect/exchange_token" element={<Data />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </BrowserRouter>
      </StravaContextProvider>
    </div>
  );
}

export default App;
