
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { tabData } from "../data.jsx";
import '../assets/css/TabLinks.css';

const TabComponent = () => {
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <div className='test-container'>
      <div className="tab-links">
        {tabData.map((tab, index) => (
          <div
            key={index}
            className="tab-link"
            style={{ backgroundImage: `url(${tab.backgroundImage})` }}
            onClick={() => handleTabClick(tab.path)}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
