import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './Reducers/Index';
import CounterAction from './Actions/CounterAction';

export default class CounterApp extends Component {
  constructor(props){
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <CounterAction />
            </Provider>
        );
    }
}