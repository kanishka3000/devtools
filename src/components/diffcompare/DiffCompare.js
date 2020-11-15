import { Button, Grid } from '@material-ui/core';
import React from 'react';

import DiffCompareRequest from './DiffCompareRequest';
import DiffCompareResult from './DiffCompareResult';
import './DiffCompare.css';
class DiffCompare extends React.Component{
    
    onCompareClicked = ()=>{

    }

    render(){
        return (
                
            <Grid container spacing = {3} justify = "center" alignItems = "stretch">
                <Grid style = {{ textAlign: 'center'}} item xs = {5}>
                    <DiffCompareRequest title = "Left"/>
                </Grid>
                <Grid style = {{ textAlign: 'center' , verticalAlign: 'center'}} item xs = {2}>
                    <Button color="primary" variant="contained" onClick = {this.onCompareClicked}>Compare</Button>
                </Grid>
                <Grid style = {{textAlign: 'center'}} item xs = {5}>
                    <DiffCompareRequest title = "Right"/>
                </Grid>

                <Grid style = {{textAlign: 'center'}} item xs = {5}>
                    <DiffCompareResult title = "Left Only"/>
                </Grid>
                <Grid item xs = {2}>

                </Grid>
                <Grid style = {{textAlign: 'center'}} item xs = {5}>
                    <DiffCompareResult title = "Right Only"/>
                </Grid>
            </Grid>
  );
    }
}
export default DiffCompare;