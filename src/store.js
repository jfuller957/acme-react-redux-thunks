import { combineReducers, createStore } from 'redux';

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

const store = createStore(reducer);

const addRandomPerson = ()=> {
    const person = { id: Math.random(), name: `Person ${Math.random()}`};
    store.dispatch({ type: ADD_PERSON, person });
};

export default store;
export { addRandomPerson };