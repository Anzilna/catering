import React from 'react'
import './home.css'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Home = (props) => {
  return (
    <div>

     <Topbar xxx={props.checkLogout}/>
     <h1 className='wel'> Welcome to harvest caterings</h1> 
     <Sidebar/>
      </div>
  )
}

export default Home