import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/NavAndFooter/Nav";
import HomePage from "./Home/HomePage";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={"about"} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
