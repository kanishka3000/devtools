import React from 'react';
import {Box, Container} from '@material-ui/core';
import DiffCompare from './diffcompare/DiffCompare';

class App extends React.Component{
    render(){
        return(
        <Container >

           <DiffCompare/>
        </Container>);
    }
}

export default App;