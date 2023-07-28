import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <Link className='btn btn-primary'>Go Back</Link>
        </div>
    )
}

export default NotFound
