import React from 'react'

import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/task'>Task</Link> </li>
                <li> <Link to='/user'>User</Link> </li>
            </ul>
        </nav>
    )
}

export default NavBar
