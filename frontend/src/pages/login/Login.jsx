import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../Hooks/useLogin';

function LoginPage() {

  const [username, setUsername]= useState("");
  const [password, setpassword] = useState("");
  const {loading , login} = useLogin();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(username, password)

  }
  return (
    <div className='felx felx-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full-p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3x1 font-semibold text-center text-gray-300'>
        Login
        <span className='text-blue-500'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
            <span className='text-blue label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' value={username} 
            onChange={(e) => setUsername(e.target.value)} />
          </div>


          <div>
          <label className='label p-2'>
            <span className='text-blue label-text'>password</span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' value={password} 
            onChange={(e) => setpassword(e.target.value)}/>
          </div>
           <Link to="/signup" className='text-sm hover:text-blue-600 mt-2 inline-block'>{"Dont't"} have an account?

           </Link>

           <div>
           <button class="btn btn-block btn-sm mt-2" disabled={loading}>{loading ? (<span className='loading loading-spinner-small'></span>) : ("login")}</button>
           </div>




        </form>

      </div>
    </div>
  )
}

export default LoginPage
