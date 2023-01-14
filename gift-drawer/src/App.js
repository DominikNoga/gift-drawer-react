import Home from "./pages/Home";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import CreateEvent from "./pages/CreateEvent";
import JoinEvent from "./pages/JoinEvent";
import Event from "./pages/Event";
import Wishlist from "./pages/Wishlist";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>          
          <Route path="/createEvent" element={<CreateEvent/>}/>
          <Route path="/joinEvent" element={<JoinEvent/>}/>
          <Route path="/event" element={<Event/>}/>
          <Route path="/wishlist/:username" element={<Wishlist/>}/>
        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;