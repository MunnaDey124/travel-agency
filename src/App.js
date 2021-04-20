import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import AddService from "./components/Dashboard/Addservice/AddService";
import Book from "./components/Dashboard/Book/Book";
import BookList from "./components/Dashboard/Book/BookList/BookList";
import Dashboard from "./components/Dashboard/Dashboard";
import Manageservices from "./components/Dashboard/ManageService/Manageservices";
import OrderList from "./components/Dashboard/OrderList/OrderList";

import Home from "./components/Home/Home/Home";
import Login from "./components/Home/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
        <Switch>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
           <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
            </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/book/:bookingId">
           <Book></Book>
           </PrivateRoute>
           <Route path="/bookList">
             <BookList></BookList>
           </Route>
           <Route path="/OrderList">
             <OrderList></OrderList>
           </Route>
           <Route path="/manageService">
             <Manageservices></Manageservices>
           </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
