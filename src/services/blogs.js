import axios from 'axios'

const baseUrl = '/api/blogs'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const create = async (blog) => {
  const res = await axios.post(baseUrl, blog)
  return res.data
}

const update = async (id, blog) => {
  const res = await axios.put(`${baseUrl}/${id}`, blog)
  return res.data
}

const remove = async (id) => {
  await axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, remove }
