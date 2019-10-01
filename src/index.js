import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { HashRouter, Link, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import People from './People';
import store from './store';




// setTimeout(() => {
//     store.dispatch({type: 'SET_PEOPLE', people: [{ id: 1, name: 'moe'}]});            
// }, 1000);

// High Order Component
// const connect = (Component)=> {
//     return class Connected extends React.Component{
//         constructor(){
//             super();
//             this.state = store.getState();
//         }
//         componentWillUnmount(){
//             this.unsubscribe();
//         }
//         componentDidMount(){
//             this.unsubscribe = store.subscribe(()=> this.setState(store.getState()));
//         }
//         render(){
//             return <Component {...this.state } {...this.props } />; 
//         }
//     }
// };







// const Nav = connect(_Nav);
// const Home = connect(_Home);
// const People = connect(_People);









class App extends React.Component{
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