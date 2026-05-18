import Notification from './components/Notification'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import useNotificationStore from './store/notificationStore'
import useBlogStore from './store/blogStore'

function App() {
  const setNotification = useNotificationStore(
    (state) => state.setNotification
  )

  const blogs = useBlogStore((state) => state.blogs)
  const fetchBlogs = useBlogStore((state) => state.fetchBlogs)

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

              {blogs.map((blog) => (
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