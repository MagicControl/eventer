import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import 'antd/dist/antd.css';

const Events = lazy(() => import('./modules/events-list-view/view'));
const Registration = lazy(() => import('./modules/registration/view'));
const Login = lazy(() => import('./modules/login/view'));
const EventDetails = lazy(() => import('./modules/event-details/view'));

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/">
                                <Header />
                                <Events />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/registration">
                                <Registration />
                            </Route>
                            <Route exact path="/event/:id">
                                <Header />
                                <EventDetails />
                            </Route>
                        </Switch>
                    </Suspense>
                </Router>
            </div>
        );
    }
}

export default App;
