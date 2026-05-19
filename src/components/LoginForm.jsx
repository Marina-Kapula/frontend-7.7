import useField from '../hooks/useField'

const LoginForm = ({ onLogin }) => {
  const username = useField('text')
  const password = useField('password')

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin({
      username: username.value,
      password: password.value,
    })
    username.reset()
    password.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        username
        <input {...username} />
      </div>
      <div>
        password
        <input {...password} />
      </div>
      <button type="submit">login</button>
    </form>
  )
}

export default LoginForm