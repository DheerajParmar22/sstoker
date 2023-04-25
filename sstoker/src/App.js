import{
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Hostel from "./pages/hostel/Hostel";
import List from "./pages/List/List.jsx";
import Gym from "./pages/gymList/GymList.jsx";
import Mess from "./pages/mess-List/MessList.jsx";
import Messes from "./pages/mess/Mess.jsx";
import Register from "./pages/Registeruser/Registeruser.jsx";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Home />}/>
        <Route path ="/hostels" element = {<List/>}/>
        <Route path ="/hostel/:id" element = {<Hostel />}/>     
        <Route path ="/gyms" element = {<Gym />}/>     
        <Route path ="/mess" element = {<Mess />}/>     
        <Route path ="/mess/:messid" element = {<Messes />}/>     
        <Route path ="/gym/:gymid" element = {<Gym />}/>     
        <Route path ="/resigteruser" element = {<Register />}/>     
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
