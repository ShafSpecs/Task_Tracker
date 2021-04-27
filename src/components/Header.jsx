import React from 'react'
import Button from './Button'

//import PropTypes from 'prop-types'

const Header = ({ title, form, showAdd }) => {
    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={form}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

/* Header.propTypes = {
    title: PropTypes.string,
} */


//CSS in JSX
/* const HeadingStyle = {
    color: 'red',
    backgroundColor: 'blue'
} */

export default Header