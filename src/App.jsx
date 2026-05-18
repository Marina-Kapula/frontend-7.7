import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Notification from './components/Notification'

import useNotificationStore from './store/notificationStore'
import useBlogStore from './store/blogStore'

function App() {
  const setNotification = useNotificationStore(s => s.setNotification)

  const blogs = useBlogStore(s => s.blogs)
  const fetchBlogs = useBlogStore(s => s.fetchBlogs)
  const likeBlog = useBlogStore(s => s.likeBlog)
  const deleteBlog = useBlogStore(s => s.deleteBlog)

  useEffect(() => {
    fetchBlogs()
  }, [])

  useEffect(() => {
    setNotification('Zustand works!')
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Notification />

              <h1>Blogs</h1>

              {blogs.map(blog => (
                <div key={blog.id}>
                  <div>{blog.title}</div>

                  <div>likes: {blog.likes}</div>

                  <button onClick={() => likeBlog(blog.id)}>
                    like
                  </button>

                  <button onClick={() => deleteBlog(blog.id)}>
                    delete
                  </button>
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