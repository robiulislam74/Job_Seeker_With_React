import Lottie from 'lottie-react'
import singIn_Lotte from '../../assets/lotteFiles/signIn_lotte.json'
import UseContext from '../../Context/CustomHook/UseContext'
import { useLocation, useNavigate } from 'react-router-dom'
import GoogleLogin from '../../SharedFiles/GoogleLogin'

const Login = () => {
    const { signInUser} = UseContext()
    const navigate = useNavigate()
    const location = useLocation()
   const form = location.state || "/"

    const handleSignIn = (e) =>{
        e.preventDefault()
        const data = new FormData(e.target)
        const registerData = Object.fromEntries(data.entries())

        signInUser(registerData.email,registerData.password)
        .then(credential=>{
            navigate(form)
            console.log(credential.user)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          Login to Your Account
        </h2>
        <form onSubmit={handleSignIn}>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500 focus:ring focus:ring-blue-200"
              />
              <span className="ml-2 text-sm text-gray-600">Remember Me</span>
            </label>
            <a
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline focus:outline-none"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>

        {/* Link to Register */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Don't have an account?{' '}
          <a
            href="/register"
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Register Now
          </a>
        </p>
        <div>
          <GoogleLogin></GoogleLogin>
        </div>
      </div>
      <Lottie className='w-[500px]' animationData={singIn_Lotte} loop={true}></Lottie>
    </div>
  )
}

export default Login