import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';

const Events = lazy(() => import('./modules/events-list-view/view'));
const Registration = lazy(() => import('./modules/registration/view'));
const EventDetails = lazy(() => import('./modules/event-details/view'));

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Suspense fallback={<div>Loading...</div>}>
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Events />
                            </Route>
                            <Route exact path="/registration">
                                <Registration />
                            </Route>
                            <Route exact path="/event/:id">
                                <EventDetails />
                            </Route>
                        </Switch>
                    </Router>
                </Suspense>
            </div>
        );
    }
}

export default App;
