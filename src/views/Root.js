import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Boards from './Boards';
import Board from './Board';
import Error from './Error';
import GlobalStyle from '../GlobalStyle';

class Root extends React.Component {

  render(){
    return (
      <>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path='/' component={Boards} />
            <Route path='/board/:boardId' component={Board} />
            <Route path='*' component={Error} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Root;
