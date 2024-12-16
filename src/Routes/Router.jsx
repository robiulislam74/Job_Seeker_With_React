import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/HomePage/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/LogIn/Login";
import JobDetails from "../components/JobDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import JobApply from "../components/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      children:[
        {
            path: "/",
            element: <Home/>,
            loader: ()=> fetch('http://localhost:3000/jobs')
        },
        {
          path: 'jobs/details/:id',
          element: <PrivateRoutes>
            <JobDetails/>
          </PrivateRoutes>,
          loader: ({params})=> fetch(`http://localhost:3000/jobs/details/${params.id}`)
        },
        {
          path: '/jobApply/:id',
          element: <PrivateRoutes>
            <JobApply/>
          </PrivateRoutes>
        },
        {
          path: '/myApplications',
          element: <PrivateRoutes>
            <MyApplications/>
          </PrivateRoutes>
        },
        {
          path: '/register',
          element: <Registration/>
        },
        {
          path: '/login',
          element: <Login/>
        },
      ]
    },
  ]);

  export default router