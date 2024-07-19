import Signup from "./components/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUS/ContactUs";
import Booking from "./components/Booking/Booking";

import UpdateUser from './components/Updating.jsx/UpdateUser'
import Packages from "./components/Packages/Packages";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/package" element={<Packages />} />


          

        <Route path='/edit/:id' element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
