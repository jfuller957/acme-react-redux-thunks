import React from 'react';
import { connect } from 'react-redux';
import { addRandomPerson } from './store';

const _People = ({ people })=> <div>
    People - there are { people.length }
    <button onClick={ addRandomPerson }>Add Random Person</button>
</div>;

const People = connect(({ people})=> {
    return {
        people
    }
})(_People);

export default People;