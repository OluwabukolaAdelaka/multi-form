import React, { Component } from 'react';
import Typography from '@mui/material/Typography';

export class Confirm extends Component {

    render() {
    return (
      <>
        <br/>
        <Typography variant="h6" color="inherit" component="div">
            Your details has been submitted successfully!
        </Typography>
        <br/>
        
      </>
    )
  }
}

export default Confirm;