import React from 'react'
import UseContext from '../Context/CustomHook/UseContext'
import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { div } from 'motion/react-client'

const PrivateRoutes = ({children}) => {
    const {user,loading} = UseContext()
    const location = useLocation()

    if(loading){
        return <div className='flex justify-center items-center min-h-[calc(100vh-220px)]'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if(user){
        return children
    }

  return (
    <>
    <Navigate to={'/login'} state={location.pathname}></Navigate>
    </>
  )
}

export default PrivateRoutes