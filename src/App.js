import { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Components/HomePage/Home/Home";
import Login from "./Components/LoginPage/Login/Login";
import PrivateRoute from "./Components/LoginPage/Login/PrivateRoute/PrivateRoute";
import AddAdmin from "./Components/AdminPage/AddAdmin/AddAdmin";
import AddBlogs from "./Components/AdminPage/AddBlogs/AddBlogs";
import BlogManage from "./Components/AdminPage/BlogsManage/BlogManage";


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  const [isAdmin, setIsAdmin] = useState(false);
  console.log(isAdmin);


  useEffect(() => {
    fetch('http://localhost:5000/isAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(data => setIsAdmin(data));
  }, [loggedInUser.email])



  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/home">
            <Home></Home>
          </PrivateRoute>
          {isAdmin &&
            <PrivateRoute path="/addAdmins">
              <AddAdmin></AddAdmin>
            </PrivateRoute>
          }
          {isAdmin &&
            <PrivateRoute path="/addBlogs">
              <AddBlogs></AddBlogs>
            </PrivateRoute>
          }
          {isAdmin &&
            <PrivateRoute path="/manageBlogs">
              <BlogManage></BlogManage>
            </PrivateRoute>
          }
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
