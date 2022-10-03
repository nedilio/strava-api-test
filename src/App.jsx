import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./components/Data";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redirect/exchange_token" element={<Data />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
