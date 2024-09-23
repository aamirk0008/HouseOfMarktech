import { useState } from 'react'
import BlogNav from '../components/BlogNav'
import { Outlet, RouterProvider } from 'react-router-dom'
import router from '../routers/router'


function Blog() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BlogNav/>
      <div className="min-h-screen">
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default Blog
