import React from 'react';
import {TextField, Grid } from '@material-ui/core';

class DiffCompareRequest extends React.Component{
    
    render(){
        return (
        <div>
            <Grid container direction = "column">
                <Grid item>
                    {this.props.title}
                </Grid>
                <Grid item>
                    <TextField variant="outlined" multiline rows = {10}/>       
                </Grid>
            </Grid>
             
             
        </div>
        )
    }
}

export default DiffCompareRequest;