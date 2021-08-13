import React,{useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Header";
import Home from"./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect (() =>{
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    });
    return () =>{
      unsubscribe();
    }
  }, []);
  console.log("USER IS >>>",user);

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout" exact>
          <Header/>
          <Checkout/>
        </Route>
        <Route path="/login"exact>
          <Login />
        </Route>
        <Route path="/"exact>
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    <div>404 Error not found</div>
    </Router>
  );
}

export default App;
