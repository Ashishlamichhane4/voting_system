import React from 'react';
import './Sidebar.css';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import HowToVoteRoundedIcon from '@material-ui/icons/HowToVoteRounded';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Sidebar(selected) {
  return <div className="as">
    <div className="home">
      <DashboardRoundedIcon className="home__icon"/><span className='home__comment'>Dashboard</span>
      {/* yeha dherai kam reapeat vaxa taibhara props use garda better hunxa euta components banai*/}

    </div>
    <div className="home">

      <HowToVoteRoundedIcon className='home__icon'/><span className='home__comment'>Election</span>
    </div>

    <div className="home">
      <SupervisorAccountIcon className='home__icon'/><span className='home__comment'>Candidates</span>

    </div>
<hr className="line"/>
    
    <div className="home">
      <GroupAddIcon className='home__icon'/><span className='home__comment'>Voters</span>
    </div>
    <div className="home">
      <CheckCircleIcon className='home__icon'/><span className='home__comment'>Constituency</span>
    </div>
    <div className="home">
      <AssessmentIcon className='home__icon'/><span className='home__comment'>Results</span>
    </div>
    
    
  </div>
}