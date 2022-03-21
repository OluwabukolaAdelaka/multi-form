import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class FormUserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange} = this.props;
    return (
      <>
        <br/>
        <Typography variant="h6" color="inherit" component="div">
            User Details Form
        </Typography>
        <br/>
        <br />
        <TextField 
         label="First Name"
         variant="standard"
         defaultValue={values.firstName}
         onChange={handleChange('firstName')}
        />
        <br />
        <br />
        <TextField 
         label="Last Name"
         variant="standard"
         defaultValue={values.lastName}
         onChange={handleChange('lastName')}
        />
        <br />
        <br />
        <TextField 
         label="Email"
         variant="standard"
         defaultValue={values.email}
         onChange={handleChange('email')}
        />
        <br />
        <br />
        <Button variant="contained" onClick={this.continue} sx={{ marginLeft: '1rem', backgroundColor: '#1976D2' }}>Next</Button>
      </>
    )
  }
}

export default FormUserDetails;