import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'

import useNotificationStore from './store/notificationStore'
import useBlogStore from './store/blogStore'
import useUserStore from './store/userStore'

function App() {
  const setNotification = useNotificationStore((s) => s.setNotification)

  const blogs = useBlogStore((s) => s.blogs)
  const fetchBlogs = useBlogStore((s) => s.fetchBlogs)
  const likeBlog = useBlogStore((s) => s.likeBlog)
  const removeBlog = useBlogStore((s) => s.removeBlog)
  const createBlog = useBlogStore((s) => s.createBlog)

  const user = useUserStore((s) => s.user)
  const setUser = useUserStore((s) => s.setUser)
  const clearUser = useUserStore((s) => s.clearUser)

  useEffect(() => {
    fetchBlogs()
  }, [])

  useEffect(() => {
    setNotification('Zustand works!')
  }, [])

  const handleLogin = async (credentials) => {
    const fakeUser = {
      username: credentials.username,
      name: credentials.username,
    }

    setUser(fakeUser)

    setNotification(`Welcome ${fakeUser.name}`)
  }

  const handleLogout = () => {
    clearUser()
    setNotification('Logged out')
  }

  const handleCreate = async (blog) => {
    await createBlog({
      ...blog,
      likes: 0,
    })

    setNotification(`Created ${blog.title}`)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Notification />

              <h1>Blogs</h1>

              {!user ? (
                <LoginForm onLogin={handleLogin} />
              ) : (
                <div>
                  <p>
                    {user.name} logged in
                  </p>

                  <button onClick={handleLogout}>
                    logout
                  </button>

                  <h2>Create blog</h2>

                  <BlogForm onCreate={handleCreate} />

                  <hr />

                  {blogs.map((blog) => (
                    <div
                      key={blog.id}
                      style={{
                        border: '1px solid black',
                        padding: 10,
                        marginBottom: 10,
                      }}
                    >
                      <div>
                        <strong>{blog.title}</strong>
                      </div>

                      <div>{blog.author}</div>

                      <div>{blog.url}</div>

                      <div>
                        likes: {blog.likes}
                      </div>

                      <button
                        onClick={() => likeBlog(blog.id)}
                      >
                        like
                      </button>

                      <button
                        onClick={() => removeBlog(blog.id)}
                      >
                        delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          }
        />

        <Route
          path="*"
          element={<h2>Page not found</h2>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App