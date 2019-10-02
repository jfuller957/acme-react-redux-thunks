import { combineReducers, createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const ADD_PERSON = 'ADD_PERSON';
const SET_PEOPLE = 'SET_PEOPLE';

const peopleReducer = ( state = [], action)=> {
    switch(action.type){
        case SET_PEOPLE:
            return action.people;
        case ADD_PERSON:
            return [...state, action.person];
    }
    // if(action.type === SET_PEOPLE){
    //     state = action.people;
    // }
    // if(action.type === ADD_PERSON){
    //     state = [...state, action.person];
    // }
    return state;
};

const reducer = combineReducers({ 
    people: peopleReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

const setPeople = (people)=> {
    return {
        type: SET_PEOPLE,
        people
    }
}

const addRandomPerson = (person)=> {
    return { type: ADD_PERSON, person }
};

const fetchPeople = ()=> {
    return async(dispatch)=> {
        const people = (await axios.get('/api/people')).data;
        dispatch(setPeople(people));
    };
};

const addRandomPersonFromServer = ()=> {
    return async(dispatch)=> {
        const person = (await axios.post('/api/people')).data;
        dispatch(addRandomPerson(person));
    };
};

export default store;
export { addRandomPerson, addRandomPersonFromServer, setPeople, fetchPeople };