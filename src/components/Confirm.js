import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
//import List from '@mui/material/List';
//import ListItem from '@mui/material/ListItem';
//import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button';

export class Confirm extends Component {
    //continue method
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    //back method
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values: {firstName, lastName, email, occupation, city, bio}} = this.props;
    return (
      <>
        <br/>
        <Typography variant="h6" color="inherit" component="div">
            Confirm Details
        </Typography>
        <br/>
        <ul style={{ listStyle: 'none' }}>
            <li>
                <h3>First Name</h3>
                <p>{firstName}</p>  
            </li>
            
            <li>
                <h3>First Name</h3>
                <p>{lastName}</p>  
            </li>
            
            <li>
                <h3>First Name</h3>
                <p>{email}</p>  
            </li>
            
            <li>
                <h3>First Name</h3>
                <p>{occupation}</p>  
            </li>
           
            <li>
                <h3>First Name</h3>
                <p>{city}</p>  
            </li>
            
            <li>
                <h3>First Name</h3>
                <p>{bio}</p>  
            </li>
        </ul>
        
        <br />
        <Button variant="contained" sx={{backgroundColor: '#488FB1'}} onClick={this.back}>Back</Button>
        <Button variant="contained" onClick={this.continue} sx={{ marginLeft: '1rem', backgroundColor: '#1976D2' }}>Next</Button>
      </>
    )
  }
}

export default Confirm;