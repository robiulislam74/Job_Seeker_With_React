import React, { useState } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

const JobDetails = () => {
    const job = useLoaderData()

    return (
        <div className="max-w-xl my-12 p-8 mx-auto border rounded-lg shadow-lg overflow-hidden bg-green-100">
            <div className="flex items-center p-4 border-b">
                <img
                    src={job?.company_logo}
                    alt={`${job?.company} Logo`}
                    className="w-16 h-16 rounded-full border mr-4"
                />
                <div>
                    <h2 className="text-lg font-semibold">{job?.title}</h2>
                    <p className="text-gray-600">{job?.company}</p>
                </div>
            </div>

            <div className="p-4 space-y-3">
                <p className="text-sm text-gray-700">
                    <span className="font-semibold">Location:</span> {job?.location}
                </p>
                <p className="text-sm text-gray-700">
                    <span className="font-semibold">Job Type:</span> {job?.jobType}
                </p>
                <p className="text-sm text-gray-700">
                    <span className="font-semibold">Category:</span> {job?.category}
                </p>
                <p className="text-sm text-gray-700">
                    <span className="font-semibold">Application Deadline:</span>{" "}
                    {job?.applicationDeadline}
                </p>
                <p className="text-sm text-gray-700">
                    <span className="font-semibold">Salary:</span> {job?.salaryRange?.currency.toUpperCase()}{" "}
                    {job?.salaryRange?.min} - {job?.salaryRange?.max}
                </p>
                <p className="text-sm text-gray-700">
                    <span className="font-semibold">Status:</span>{" "}
                    <span
                        className={`${job?.status === "active" ? "text-green-600" : "text-red-600"
                            } font-medium`}
                    >
                        {job?.status}
                    </span>
                </p>
            </div>

            <div className="p-4 border-t">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-sm text-gray-700 mt-2">{job?.description}</p>

                <h3 className="text-lg font-semibold mt-4">Requirements</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    {job?.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))}
                </ul>

                <h3 className="text-lg font-semibold mt-4">Responsibilities</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    {job?.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                    ))}
                </ul>
            </div>
            <div className='py-4'>
              <NavLink to={`/jobApply/${job._id}`}>
              <button className='btn btn-primary w-full'>Apply Now</button>
              </NavLink>
            </div>

        </div>
    )
}

export default JobDetails