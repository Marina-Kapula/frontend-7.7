import useField from '../hooks/useField'

const BlogForm = ({ onCreate }) => {
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const handleSubmit = (event) => {
    event.preventDefault()
    onCreate({
      title: title.value,
      author: author.value,
      url: url.value,
    })
    title.reset()
    author.reset()
    url.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        title
        <input {...title} />
      </div>
      <div>
        author
        <input {...author} />
      </div>
      <div>
        url
        <input {...url} />
      </div>
      <button type="submit">create</button>
    </form>
  )
}

export default BlogForm