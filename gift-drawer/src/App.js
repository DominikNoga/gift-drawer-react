import Home from "./pages/Home";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import CreateEvent from "./pages/CreateEvent";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>          
        <Route exact path="/createEvent" element={<CreateEvent/>}/>
      </Routes>
    </Router>
  );
}

export default App;