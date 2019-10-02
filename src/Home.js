import React from 'react';
import { connect } from 'react-redux';
import { addRandomPersonFromServer } from './store';

const _Home = ({ people, addRandomPerson })=> <div>
    Home - there are { people.length }
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

const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);

export default Home;