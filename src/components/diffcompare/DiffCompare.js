import { Button, Grid } from '@material-ui/core';
import React from 'react';
import {connect} from 'react-redux';

import DiffCompareRequest from './DiffCompareRequest';
import DiffCompareResult from './DiffCompareResult';

import {compareLists} from '../../actions';

import './DiffCompare.css';
class DiffCompare extends React.Component{
    
    render(){
        const {left, right} = this.props;
        return (
                
            <Grid container spacing = {3} justify = "center" alignItems = "stretch">
                <Grid style = {{ textAlign: 'center'}} item xs = {5}>
                    <DiffCompareRequest title = "Left" holder = "left" />
                </Grid>
                <Grid style = {{ textAlign: 'center' , verticalAlign: 'center'}} item xs = {2}>
                    <Button color="primary" variant="contained" onClick = {() => this.props.compare(left, right)}>Compare</Button>
                </Grid>
                <Grid style = {{textAlign: 'center'}} item xs = {5}>
                    <DiffCompareRequest title = "Right" holder = "right"/>
                </Grid>

                <Grid style = {{textAlign: 'center'}} item xs = {5}>
                    <DiffCompareResult side = 'leftOnly' title = "Left Only"/>
                </Grid>
                <Grid item xs = {2}>

                </Grid>
                <Grid style = {{textAlign: 'center'}} item xs = {5}>
                    <DiffCompareResult side = 'rightOnly' title = "Right Only"/>
                </Grid>
            </Grid>
  );
    }
}
function mapStateToProps(state){

    if(! state.form.hasOwnProperty('diffCompareRequest')){
        return {left: '', right: ''};
    }
    if(! state.form.diffCompareRequest.hasOwnProperty('values')){
        return {left: '', right: ''};
    }
    return {
        left: state.form.diffCompareRequest.values.left,
        right: state.form.diffCompareRequest.values.right,
    }
}

export default connect(mapStateToProps, {compare: compareLists})(DiffCompare);