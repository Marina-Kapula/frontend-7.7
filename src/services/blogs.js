const baseUrl = '/api/blogs'

const getAll = async () => {
  const response = await fetch(baseUrl)
  return await response.json()
}

export default { getAll }