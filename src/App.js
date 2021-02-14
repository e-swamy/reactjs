import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Preloader from './components/shared/Preloader'
import PageNotFound from './components/content/PageNotFound'
import './assets/sass/app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
    this.preLoader = this.preLoader.bind(this);
  }

  componentDidMount() {
    setTimeout(this.preLoader, 500);
  }

  preLoader() {
    this.setState({ isLoading: false })
  }

  render() {
    return (
      this.state.isLoading ?
        <Preloader />
        :
        <Router basename='/'>
          <div className="App">
            <Switch>
              <Route exact path="/reactjs" component={Home} />
              <Route path='/reactjs*' component={PageNotFound} />
            </Switch>
          </div>
        </Router>
    )
  }
}

