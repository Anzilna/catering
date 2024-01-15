import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
        <a href='/home'><li>HOME</li></a>
       </ul>
       add items
       <ul>
        <a href='/fooditems'><li>food items</li></a>
        <a href="/Package"><li>package</li></a>
       </ul>
       View
       <ul>
       <a href="/Foodview"><li>Food view</li></a>
       <a href="/Packageview"><li> Package view</li></a>
      </ul>
      
    </div>
  );
};

export default Sidebar;