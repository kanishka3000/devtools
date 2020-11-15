import { Grid } from '@material-ui/core';
import React from 'react';

class DiffCompareResult extends React.Component{

    render(){
        return (
            <div>
                <Grid container direction = "column">
                    <Grid item> {this.props.title}</Grid>
                </Grid>
            </div>
        );
    }
}

export default DiffCompareResult;