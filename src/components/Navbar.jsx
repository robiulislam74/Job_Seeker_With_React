import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/job-logo.png'
import UseContext from '../Context/CustomHook/UseContext'
import auth from '../FireBase/firebase.config'
import { signOut } from 'firebase/auth'

const Navbar = () => {
  const { user } = UseContext()

  const handleLogOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const links = <div className='flex items-center text-base font-medium text-gray-600 space-x-6'>
    <NavLink to={"/"}>
      <li>Home</li>
    </NavLink>
    <NavLink to={"/details"}>
      <li>Details</li>
    </NavLink>
  </div>

  return (
    <div className="navbar max-w-screen-xl mx-auto py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl">
          <img className='w-14' src={logo} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        {
          user
            ?
            <div>
              <NavLink to={'/'}>
                <button onClick={handleLogOut} className="btn btn-error btn-outline">LogOut</button>
              </NavLink>
            </div>
            :
            <div className='flex gap-4'>
              <NavLink to={'/login'}>
                <button className="btn btn-primary btn-outline">Login</button>
              </NavLink>
              <NavLink to={'/register'}>
                <button className="btn btn-primary btn-outline">Registration</button>
              </NavLink>
            </div>
        }
      </div>
    </div>
  )
}

export default Navbar