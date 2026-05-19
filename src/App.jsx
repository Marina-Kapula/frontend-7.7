import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'

import Users from './pages/Users'
import User from './pages/User'
import Notification from './components/Notification'

import useNotificationStore from './store/notificationStore'
import useBlogStore from './store/blogStore'

function Comments({ blog, fetchBlogs }) {
  const [text, setText] = useState('')

  const addComment = async (e) => {
    e.preventDefault()

    const updatedBlog = {
      ...blog,
      comments: blog.comments ? [...blog.comments, text] : [text]
    }

    await axios.put(`/api/blogs/${blog.id}`, updatedBlog)

    setText('')
    fetchBlogs()
  }

  return (
    <div style={{ marginTop: 10 }}>
      <h4>comments</h4>

      <ul>
        {(blog.comments || []).map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      <form onSubmit={addComment}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">add comment</button>
      </form>
    </div>
  )
}

function App() {
  const setNotification = useNotificationStore(s => s.setNotification)

  const blogs = useBlogStore(s => s.blogs) ?? []
  const fetchBlogs = useBlogStore(s => s.fetchBlogs)
  const likeBlog = useBlogStore(s => s.likeBlog)
  const deleteBlog = useBlogStore(s => s.deleteBlog)

  useEffect(() => {
    fetchBlogs()
  }, [])

  useEffect(() => {
    setNotification('App loaded')
  }, [])

  return (
    <BrowserRouter>
      <div>

        {/* NAV */}
        <nav style={{ marginBottom: 20 }}>
          <Link to="/">Blogs</Link>{' '}
          <Link to="/users">Users</Link>
        </nav>

        <Notification />

        <Routes>

          {/* BLOGS */}
          <Route
            path="/"
            element={
              <div>
                <h1>Blogs</h1>

                {blogs.map(blog => (
                  <div key={blog.id} style={{ marginBottom: 20 }}>

                    <div><b>{blog.title}</b></div>
                    <div>likes: {blog.likes}</div>

                    <button onClick={() => likeBlog(blog.id)}>
                      like
                    </button>

                    <button onClick={() => deleteBlog(blog.id)}>
                      delete
                    </button>

                    <Comments blog={blog} fetchBlogs={fetchBlogs} />
                  </div>
                ))}
              </div>
            }
          />

          {/* USERS */}
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />

          {/* 404 */}
          <Route path="*" element={<h2>Page not found</h2>} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App