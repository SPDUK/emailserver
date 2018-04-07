import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large white">
          <i className="large red-text material-icons plus">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
