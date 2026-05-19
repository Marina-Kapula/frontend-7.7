import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useUserStore from '../store/userStore'
import useBlogStore from '../store/blogStore'

function User() {
  const { id } = useParams()

  const users = useUserStore(s => s.users) ?? []
  const fetchUsers = useUserStore(s => s.fetchUsers)

  const blogs = useBlogStore(s => s.blogs) ?? []

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const user = users.find(u => String(u.id) === String(id))

  if (!user) {
    return <div>no user found</div>
  }

  const userBlogs = blogs.filter(b => b.user?.id === id)

  return (
    <div>
      <h2>{user.name}</h2>

      <h3>added blogs</h3>

      <ul>
        {userBlogs.map(blog => (
          <li key={blog.id}>
            {blog.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default User