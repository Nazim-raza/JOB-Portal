import React from 'react'

const Register = () => {
    return (
        <>
            <div className='form-container'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="last name" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>


        </>
    )
}

export default Register
