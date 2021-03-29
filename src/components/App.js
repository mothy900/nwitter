import React,{ useState } from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";
import Auth from "routes/Auth";


function App() {
  //authService.currentUser -> 1 or null  (user = 1 , not user = null)
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);  
  return ( 
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );  
}

export default App;
