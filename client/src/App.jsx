import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/NavAndFooter/Nav";
import HomePage from "./HomePage";

function App() {
  return (
    <>
      <div>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
