import { useEffect, useState } from 'react'
import blogsService from './services/blogs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogsService.getAll().then(data => {
      setBlogs(data)
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"   
          element={
            <div>
              <h1>Blogs</h1>

              {blogs.map(blog => (
                <div key={blog.id}>
                  {blog.title}
                </div>
              ))}
            </div>
          }
        />

        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </BrowserRouter>
  )
}



export default App