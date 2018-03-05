import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => (
    <div className='Center'>
        <Link to='/home'>Home | </Link>
        <Link to='/about'>About | </Link>
        <Link to='/search'>Search</Link>
    </div>
)

export default Header