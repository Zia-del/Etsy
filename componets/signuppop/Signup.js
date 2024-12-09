import React from 'react'

const signup = () => {
  return (
    <div className='signup'>
      <div className='register'><p>Sign in</p> <button className='registerbtn bg-white'>Register</button></div>

      <div className='form'>
        <p className='emailp'>Email address</p>
        <input type='E_mail' className='email' />

        <div className='password'>
          <p className='emailp'>Password</p>
          <input type='assword' className='email' />
        </div>
      </div>

      <div className='anchore'>
        <p>stay signed in</p>
        <a className='a'>Forgot your password?</a>
      </div>

      {/* <div><button></button></div> */}
    </div>
  )
}

export default signup