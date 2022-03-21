import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class FormPersonalDetails extends Component {
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
        const {values, handleChange} = this.props;
    return (
      <>
        <br/>
        <Typography variant="h6" color="inherit" component="div">
            User Personal Details
        </Typography>
        <br/>
        <br />
        <TextField 
         label="Occupation"
         variant="standard"
         defaultValue={values.occupation}
         onChange={handleChange('occupation')}
        />
        <br />
        <br />
        <TextField 
         label="City"
         variant="standard"
         defaultValue={values.city}
         onChange={handleChange('city')}
        />
        <br />
        <br />
        <TextField 
         label="Bio"
         variant="standard"
         defaultValue={values.bio}
         onChange={handleChange('bio')}
        />
        <br />
        <br />
        <Button variant="contained" sx={{backgroundColor: '#488FB1'}} onClick={this.back}>Back</Button>
        <Button variant="contained" onClick={this.continue} sx={{ marginLeft: '1rem', backgroundColor: '#1976D2' }}>Next</Button>
      </>
    )
  }
}

export default FormPersonalDetails;