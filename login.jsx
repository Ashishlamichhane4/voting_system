import React, { useState } from "react";
import ReactDOM from "react-dom";
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
    }
    const [user, setUser] = useState({ user: "", email: "" });
    const [error, setError] = useState("");
    const Login = details => {
        console.log("Login");
        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("we are logged in");
            setUser({
                user: details.user,
                email: details.email

            })

        }
        else {
            console.log("sorry details not match");
            setError("sorry details not match")
        }

    }
    const Logout = () => {
        console.log("Logout");
        setUser({ name: "", email: "" });

    }



    return (
        <div className="Login">
            {(user.email != "") ? (
                <div className="welcome">
                    <Adminpage/>
                    <div className="app__page">

                       <Sidebar/>
                       <Information/>
                       {/* <Upload/> */}
                       {/* <ElectionDetails/> */}
                    </div>
                    <div className="home1" onClick={Logout}>

                      <ExitToAppIcon className='home__icon'  /><span className='home__comment'>Logout</span>
                      
                    </div>

                    
                    {/* <h2>WELCOme,<span>{user.name}</span></h2> */}
                    {/* <button onClick={Logout}>Logout</button> */}
                </div>

            ) : (
                <LoginForm Login={Login} error={error} />
            )
            }


        </div>
    );
}

export default Login;