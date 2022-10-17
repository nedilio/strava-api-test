import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./components/Data/Data";
import Home from "./Pages/Home";
import StravaContextProvider from "./context/StravaContext";
import Nav from "./components/Nav/Nav";
import User from "./Pages/User";
import Activity from "./Pages/Activity";

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
            <Route path="/activity/:id" element={<Activity />} />
          </Routes>
        </BrowserRouter>
      </StravaContextProvider>
    </div>
  );
}

export default App;
