import React, { useEffect, useState } from 'react'
import UseContext from '../../Context/CustomHook/UseContext'

const MyApplications = () => {
    const { user } = UseContext()
    const [myApplications, setMyApplications] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/myApplications?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyApplications(data))
    }, [user.email])
    console.log("MY:", myApplications)


    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className="overflow-x-auto my-24 border">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Company</th>
                            <th>Job Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myApplications.map((applications,idx)=>
                                <tr>
                            <th>{idx+1}</th>
                            <td>{applications?.title}</td>
                            <td>{applications?.company}</td>
                            <td>{applications?.jobType}</td>
                            <td>
                                <div className='flex gap-x-3'>
                                    <button className='bg-green-500 px-2 py-1 rounded-full font-medium text-white'>Update</button>
                                    <button className='bg-red-500 px-2 py-1 rounded-full font-medium text-white'>Delete</button>
                                </div>
                            </td>
                        </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyApplications