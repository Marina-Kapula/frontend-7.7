const baseUrl = '/api/users'

const getAll = async () => {
  const response = await fetch(baseUrl)
  return await response.json()
}

const getOne = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`)
  return await response.json()
}

export default { getAll, getOne }