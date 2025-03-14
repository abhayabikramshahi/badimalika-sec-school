import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Curriculum from "./Pages/Curriculum"
import Faculty from "./Pages/Faculty"
import Admission from "./Pages/Admission"
import Sports from "./Pages/Sports"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import Gallery from "./Pages/Gallery"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics"  >
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="admission" element={<Admission />} />
        </Route>
        <Route path="/activities">
          <Route path="sports" element={<Sports />} />
          <Route path="clubs" element={<Admission />} />
          <Route path="events" element={<Admission />} />
          <Route path="Notices" element={<Admission />} />
          <Route path="Vacancy" element={<Admission />} />
          <Route path="Teachers" element={<Admission />} />
          <Route path="Students" element={<Admission />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
