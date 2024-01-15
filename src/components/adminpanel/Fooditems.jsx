import React from 'react'
import Topbar from './Topbar'
import { Button, TextField } from '@mui/material'
import Sidebar from './Sidebar'

const Fooditems = () => {
  return (
    <div>
       <br/>
       
      <TextField label="Food code" variant="filled" /><br/><br/>
      <TextField  label="food NAME" variant="filled" /><br/><br/>
      <TextField  label="description" variant="filled"  /><br/><br/>
      <TextField  label="price" variant="filled"  /><br/><br/>
      status:
      <select name='status'>
        <option value='ACTIVE'>ACTIVE</option>
        <option value='INACTIVE'>INACTIVE</option>
      </select><br></br><br></br>
      <Button variant="contained" >SUBMIT</Button>
      
    </div>
  )
}

export default Fooditems
