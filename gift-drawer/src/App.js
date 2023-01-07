import Home from "./pages/Home";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import CreateEvent from "./pages/CreateEvent";
import JoinEvent from "./pages/JoinEvent";
import Event from "./pages/Event";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>          
        <Route path="/createEvent" element={<CreateEvent/>}/>
        <Route path="/joinEvent" element={<JoinEvent/>}/>
        <Route path="/event" element={<Event/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;