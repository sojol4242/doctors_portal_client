import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Shared/Header/Header";
import Home from "./Home/Home";
import Appointment from "./Appointments/Appointment/Appointment";

function App() {
  return (
    <div className="App">
    <Router>
  
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/appointment">
            <Appointment/>
          </Route>
         
        </Switch>
    
    </Router>
    </div>
  );
}

export default App;
