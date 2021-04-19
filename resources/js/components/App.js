import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import PeopleRander from './PeopleRander';
import PlanetsRander from './PlanetsRander';
import ErrorPage from './ErrorPage';
import Home from './Home';
import './frontApp.css'
import StarshipsRander from './StarshipsRander';
class App extends Component {
    render() {
        return (
            <>
                <div class="container-fluid">
                    <div class="row content">
                        <div class="col-sm-3 sidenav">
                            <ul class="nav nav-pills nav-stacked">
                                <li><NavLink to="/people">View People</NavLink ></li>
                                <li><NavLink to="/planets">View Planets</NavLink ></li>
                                <li><NavLink to="/starships">View Starships</NavLink ></li>
                            </ul><br />
                        </div>
                        <div class="col-sm-9 d-flex justify-content-center boxright flex-wrap">
                            <Switch>
                                <Route exact path="/people">
                                    <PeopleRander />
                                </Route>
                                <Route exact path="/home">
                                    <Home />
                                </Route>
                                <Route exact path="/planets">
                                    <PlanetsRander />
                                </Route>
                                <Route exact path="/starships">
                                    <StarshipsRander />
                                </Route>
                                <Route path='*'>
                                    <ErrorPage />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root'));
}
