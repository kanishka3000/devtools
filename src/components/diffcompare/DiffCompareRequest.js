import React from 'react';
import {Grid } from '@material-ui/core';
import {reduxForm, Field} from 'redux-form';
import TextFieldWrapper from './TextFieldWrapper';

class DiffCompareRequest extends React.Component{
    
    render(){
        
        return (
        <div>
            <Grid container direction = "column">
                <Grid item>
                    {this.props.title}
                </Grid>
                <Grid item>
                    <Field name = {this.props.holder} component = {TextFieldWrapper} defaultValue = {this.props.holder} variant="outlined" rows = {10}/>
                    
                </Grid>
            </Grid>            
             
        </div>
        )
    }
}

export default reduxForm({form: 'diffCompareRequest'})(DiffCompareRequest);