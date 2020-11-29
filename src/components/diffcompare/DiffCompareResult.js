import { Grid } from '@material-ui/core';
import React from 'react';

import {connect} from 'react-redux';

class DiffCompareResult extends React.Component{

    renderValueList(){
        return this.props.value.map( field => {
            return <div key = {field}>{field}</div>
        }
            
        );
    }

    render(){
        return (
            <div>
                <Grid container direction = "column">
                    <Grid item> {this.props.title}</Grid>
                    {this.renderValueList()}
                </Grid>
            </div>
        );
    }
}
function mapStateToProps(state, {side}){
    if(!state.hasOwnProperty('compare') || state.compare === null){
        return {value: []};
    }
    const value = state.compare[side];
    return {value};

}

export default connect(mapStateToProps, {})(DiffCompareResult);