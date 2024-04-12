import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/NavAndFooter/Nav";
import HomePage from "./Components/HomeComponent/HomePage";
import ErrorPage from "./Components/ErrorPage";
import EventComponent from "./Components/EventsComponents/EventComponent";
import About from "./Components/AboutComponent/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Nav />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<EventComponent />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
