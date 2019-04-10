import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';


const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;


class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render(){
    return(
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};



export default connect(null, actions)(App); 
// connect passes actions into the component as props
// if you use mapStateToProps connect function will take 
// mapStateToProps and pass the store into mapStateToProps as 
// the state parameter