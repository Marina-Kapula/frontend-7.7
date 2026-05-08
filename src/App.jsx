import Notification from './components/Notification'
import { useEffect, useState } from 'react'
import blogsService from './services/blogs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import useNotificationStore from './store/notificationStore'

function App() {
  const [blogs, setBlogs] = useState([])

  const setNotification = useNotificationStore(
    (state) => state.setNotification
  )

  useEffect(() => {
    blogsService.getAll().then(data => {
      setBlogs(data)
    })
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