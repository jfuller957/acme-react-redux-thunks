import React from 'react';
import { connect } from 'react-redux';
import { addRandomPerson } from './store';

const _Home = ({ people })=> <div>
    Home - there are { people.length }
    <button onClick={ addRandomPerson }>Add Random Person</button>
</div>;

const Home = connect(({ people})=> {
    return {
        people
    }
})(_Home);

export default Home;