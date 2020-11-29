import {TextField } from '@material-ui/core';

export default (props)=>{
    
    return <TextField multiline rows = {props.rows} variant = {props.variant} {...props.input}/>;
}