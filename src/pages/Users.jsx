import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useUserStore from '../store/userStore'
import useBlogStore from '../store/blogStore'

function Users() {
  const users = useUserStore(s => s.users) ?? []
  const fetchUsers = useUserStore(s => s.fetchUsers)

  const blogs = useBlogStore(s => s.blogs) ?? []

  useEffect(() => {
    fetchUsers()
  }, [])

  if (!users.length) {
    return <div>loading...</div>
  }

  return (
    <div>
      <h2>Users</h2>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
            {' '}
            — blogs: {blogs.filter(b => b.user?.id === user.id).length}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users