import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/NavAndFooter/Nav";
import HomePage from "./Components/HomeComponent/HomePage";
import ErrorPage from "./Components/ErrorPage";
import EventComponent from "./Components/EventsComponents/EventComponent";
import About from "./Components/AboutComponent/About";
import Contact from "./Components/ContactComponet/Contact";
import Club from "./Components/ClubComponent/Club";
import EventsDetail from "./Components/EventsComponents/EventsDetail";
import ClubDetail from "./Components/ClubComponent/ClubDetail";
import EventForm from "./Components/EventsComponents/EventForm/EventForm";
import SucessPage from "./Components/EventsComponents/Payment/SucessPage";

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
            <Route path="/events/:eventId" element={<EventsDetail />} />
            <Route path="/eventForm/:eventId" element={<EventForm />} />
            <Route path="/event/successform/:id" element={<SucessPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clubs" element={<Club />} />
            <Route path="/clubs/:clubId" element={<ClubDetail />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
