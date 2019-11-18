import React from 'react';
import { Provider, observer, inject } from 'mobx-react';

export const connect = stores => component => props => {
    const Component = inject(...Object.keys(stores))(observer(component));
    return (
        <Provider {...stores}>
            <Component {...props} />
        </Provider>
    );
};
