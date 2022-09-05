import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "../Components/NavBar";
import HomePage from "./HomePage";
import EducationApp from "../Components/EducationApp";
import BucketList from "../Components/BucketList";
import WeatherApp from "../Components/WeatherApp";
import About from "../Components/About";


function Navigation() {


return (
    
    <Router>

        <div className="wrapper">
            <NavBar/>
        <Routes>
            <Route exact path="/portfolio/" element={< HomePage/>} />
            <Route exact path="/portfolio/EducationApp" element={< EducationApp/>} />
            <Route exact path="/portfolio/BucketList" element={< BucketList/>} />
            <Route exact path="/portfolio/WeatherApp" element={< WeatherApp/>} />
            <Route exact path="/portfolio/About" element={< About/>} />
            <Route exact path="*"></Route>
        </ Routes>

        </div>
    </Router>
);
}
export default Navigation;