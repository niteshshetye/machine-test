import React from 'react'

import './eachtask.css'

const  EachTask = ({id, title, completed}) => {    
    return (
        <div className='each-task'>
            <li>{id}</li>
            <li>{title}</li>
            <li>{String(completed).charAt(0).toUpperCase() + String(completed).slice(1)}</li>
        </div>
    )
}

export default EachTask
