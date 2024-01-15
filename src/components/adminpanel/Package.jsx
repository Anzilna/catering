import { Button, TextField } from '@mui/material'
import React from 'react'

const Package = () => {
  return (
    <div>
       <TextField label="package code" variant="filled" /><br/><br/>
      <TextField  label="package NAME" variant="filled" /><br/><br/>
      <TextField  label="description" variant="filled"  /><br/><br/>
      <input type='file'/><br/><br/>
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

export default Package
