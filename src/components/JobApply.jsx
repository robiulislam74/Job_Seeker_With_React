import React from 'react'
import UseContext from '../Context/CustomHook/UseContext'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const JobApply = () => {
    const {id} = useParams()
    const {user} = UseContext()
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        const form = new FormData(e.target)
        const applyData = Object.fromEntries(form.entries())

        const applyObjData = {
            job_id: id,
            applicant_email: user.email,
            name: applyData.name,
            phone: applyData.phone,
            gitHub: applyData.gitHub,
            message: applyData.message
        }

        const {data} = axios.post(`http://localhost:3000/jobApply`,applyObjData)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/myApplications')
            }
        }
        ) 
        
        e.target.reset()
    }
  return (
    <div className="max-w-md mx-auto p-6 my-12 bg-green-100 shadow-md rounded-lg">
    <h1 className="text-xl font-bold text-gray-800 mb-4">Apply for Job</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
          GitHub Link
        </label>
        <input
          type="url"
          id="gitHub"
          name="gitHub"
          placeholder="Enter your gitHub Link"
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Why are you a good fit?"
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
        />
      </div>


      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit Application
      </button>
    </form>
  </div>
  )
}

export default JobApply