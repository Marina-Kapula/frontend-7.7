import { useEffect, useState } from 'react'
import blogsService from './services/blogs'

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogsService.getAll().then(data => {
      setBlogs(data)
    })
  }, [])

  return (
    <div>
      <h1>Blogs</h1>

      {blogs.map(blog => (
        <div key={blog.id}>
          {blog.title}
        </div>
      ))}
    </div>
  )
}

export default App