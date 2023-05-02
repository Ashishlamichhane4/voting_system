import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch,
    Link
  } from "react-router-dom";
import LoginForm from './LoginForm.js';
import Information from './Info.js';
import Sidebar from './sidebar.jsx';
import Upload from './CandidateUpload.jsx';
import ElectionDetails from "./Electiondetails.jsx";

import Adminpage from './Admin_Page.js';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import "./login.css";
function Login() {
    const adminUser = {
        user: "admin",
        email: "ashishlamichhane437@gmail.com",
        password: "pass1"
    };
    const [user, setUser] = useState({ user: "", email: "" });
    const [error, setError] = useState("");
    const Login = details => {
        console.log("Login");
        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("we are logged in");
            setUser({
                user: details.user,
                email: details.email
            });
        } else {
            console.log("sorry details not match");
            setError("sorry details not match");
        }
    };
    const Logout = () => {
        console.log("Logout");
        setUser({ user: "", email: "" });
    };

    return (
        <div className="Login">
            {user.email != "" ? (
                 <div className="welcome">
                    
      <Router> 
        {/* <Header/>  */}
        <Adminpage/>
    
        <Switch>
          <Route path="/">
          
             <div className='app__page'>
                <Sidebar/>
                {/* <SearchPage/> */}
                <Information/>
                
              </div>  
          </Route>
          <Route exact path="/mm">
               <div className='app__page'>
                 <Sidebar/>
                 

                  {/* <Recommended/>  */}
                  <ElectionDetails/>
             </div> 
         </Route> 
          <Route exact path="/Candidates">
               <div className='app__page'>
                 <Sidebar/>
                 

                  {/* <Recommended/>  */}
                  <Upload/>
             </div>  
          </Route>
          <Route exact path="/Candidates">
               <div className='app__page'>
                 <Sidebar/>
                 

                  {/* <Recommended/>  */}
                  <Upload/>
             </div>  
          </Route>
          
          <Route exact path="/Candidates">
               <div className='app__page'>
                 <Sidebar/>
                 

                  {/* <Recommended/>  */}
                  <Upload/>
             </div>  
          </Route>


        </Switch>
    </Router>

            



                 {/* <Adminpage/> */}
                 {/* <div className="app__page"> */}

                    {/* <Sidebar/> */}
                    {/* <Information/> */}
                    {/* <Upload/> */}
                    {/* <ElectionDetails/> */}
                 {/* </div> */}
                 <div className="home1" onClick={Logout}>

                   <ExitToAppIcon className='home__icon'  /><span className='home__comment'>Logout</span>
                   
                 </div>

                 
                 {/* <h2>WELCOme,<span>{user.name}</span></h2> */}
                 {/* <button onClick={Logout}>Logout</button> */}
             </div>
              
            ) : (
                <LoginForm Login={Login} error={error} />
            )}
            {user.email != "" && (
                <div className="home1" onClick={Logout}>
                    <ExitToAppIcon className='home__icon' /><span className='home__comment'>Logout</span>
                </div>
            )}
        </div>
    );
}

export default Login;

