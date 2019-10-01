import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const _Nav = ({ count, location })=> {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/people'>People ({ count })</Link>
        </nav>
    );
};

const Nav = connect(({ people })=> {
    return {
        count: people.length
    }
})(_Nav);

export default Nav;