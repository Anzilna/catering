import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';


const Foodview = () => {
 

 return (
    <div className="App">
      
      <table border={5}> 
        <thead>
          <tr>
            <th>food code</th>
            <th>food name</th>
            <th>catogary</th>
            <th>delete</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
      
     
    </div>
     
 );
};

export default Foodview;