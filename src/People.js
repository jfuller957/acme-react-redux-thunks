import React from 'react';
import { connect } from 'react-redux';
import { addRandomPersonFromServer } from './store';

const _People = ({ people, addRandomPerson })=> <div>
    People - there are { people.length }
    <button onClick={ addRandomPerson }>Add Random Person</button>
</div>;

const mapStateToProps = ({ people })=> ({ people });

const mapDispatchToProps = (dispatch) => {
    return {
        addRandomPerson: ()=> {
            dispatch(addRandomPersonFromServer());
        }
    };
};

const People = connect(mapStateToProps, mapDispatchToProps)(_People);

export default People;