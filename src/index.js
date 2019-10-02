import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider, connect } from 'react-redux';
import { HashRouter, Link, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import People from './People';

import store, { fetchPeople } from './store';



class App extends React.Component{
    async componentDidMount(){
        store.dispatch(fetchPeople());
    }
    render(){
        return (
            <Provider store={ store }>
                <HashRouter>
                    <Route component={ Nav } />
                    <Route path='/' component={ Home } exact />
                    <Route path='/people' component={ People } />
                </HashRouter>
            </Provider>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));