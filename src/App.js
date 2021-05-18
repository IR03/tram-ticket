import './App.css';
import Header from './Component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import Home from './Component/Home/Home';
import Destination from './Component/Destination/Destination';
import { createContext, useState } from 'react';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [search, setSearch] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});
  const [newUser, setNewUser] = useState(true);
  const [ticket, setTicket] = useState({});
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser,newUser, setNewUser,search, setSearch,ticket, setTicket}}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
