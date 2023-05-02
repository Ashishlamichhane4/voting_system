import React from 'react';
import './Sidebar.css';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import HowToVoteRoundedIcon from '@material-ui/icons/HowToVoteRounded';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import { Link } from '@material-ui/core';
import {Link} from "react-router-dom";

export default function Sidebar(selected) {
  return <div className="as">
    <Link to="/">
      <div className="home">
         <DashboardRoundedIcon className="home__icon"/><span className='home__comment'>Dashboard</span>
          {/* yeha dherai kam reapeat vaxa taibhara props use garda better hunxa euta components banai*/}

      </div>
    </Link>
    <Link to="/election">
         <div className="home">

             <HowToVoteRoundedIcon className='home__icon'/><span className='home__comment'>Election</span>
         </div>
    </Link>
    <Link to="/candidates">
      <div className="home">
        <SupervisorAccountIcon className='home__icon'/><span className='home__comment'>Candidates</span>

      </div>
    </Link>
<hr className="line"/>
    <Link to="/voters">
      <div className="home">
        <GroupAddIcon className='home__icon'/><span className='home__comment'>Voters</span>
     </div>

    </Link>
    <Link to="/constituency">
      <div className="home">
        <CheckCircleIcon className='home__icon'/><span className='home__comment'>Constituency</span>
      </div>

    </Link >
    <Link to="results">
      <div className="home">
        <AssessmentIcon className='home__icon'/><span className='home__comment'>Results</span>
      </div>

    </Link>

    
    
    
  </div>
}