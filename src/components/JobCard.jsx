import React from 'react'
import { NavLink } from 'react-router-dom'

const JobCard = ({job}) => {

    const handleJobDetails =(_id)=>{
        console.log(_id)
    }

  return (
    <div className="w-80 mx-auto border rounded-lg shadow-md overflow-hidden bg-lime-200">
    <div className="flex items-center p-4 border-b">
      <img
        src={job.company_logo}
        alt={`${job.company} Logo`}
        className="w-12 h-12 rounded-full border mr-4"
      />
      <div>
        <h2 className="text-lg font-semibold">{job.title}</h2>
        <p className="text-gray-600 text-sm">{job.company}</p>
      </div>
    </div>

    <div className="p-4 space-y-2">
      <p className="text-sm text-gray-700">
        <span className="font-semibold">Job Type:</span> {job.jobType}
      </p>
      <p className="text-sm text-gray-700">
        <span className="font-semibold">Location:</span> {job.location}
      </p>
      <p className="text-sm text-gray-700 truncate">
        {job.description}
      </p>
    </div>

    <div className="p-4 border-t">
      <NavLink to={`jobs/details/${job._id}`}>
      <button
        className="w-full bg-blue-600 text-white text-center font-semibold py-2 rounded hover:bg-blue-700 transition"
      >
        Apply
      </button>
      </NavLink>
    </div>
  </div>
  )
}

export default JobCard