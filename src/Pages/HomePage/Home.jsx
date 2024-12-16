import React from 'react'
import Banner from '../../components/Banner'
import { useLoaderData } from 'react-router-dom'
import JobCard from '../../components/JobCard'
import Heading from '../../components/Heading'


const Home = () => {
  const jobs = useLoaderData()
  
  return (
    <div>
      <div className='bg-base-200'>
       <Banner/>
      </div>
      <div>
        <Heading
        title={'Available Jobs'}
        subTitle={'Discover this jobs and like a one job and click on view details and explore it.'}
        />
      </div>
      <div className='max-w-screen-lg mx-auto mb-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        jobs.map(job=>
          <JobCard key={job._id} job={job}/>
        )
      }
      </div>
    </div>
  )
}

export default Home