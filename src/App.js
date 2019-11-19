import React from 'react';

import Registration from './modules/events-list-view/view';

import 'antd/dist/antd.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Registration />
            </div>
        );
    }
}

export default App;
