const KEY = 'loggedBlogappUser'

export const getUser = () => {
  const json = window.localStorage.getItem(KEY)
  return json ? JSON.parse(json) : null
}

export const saveUser = (user) => {
  window.localStorage.setItem(KEY, JSON.stringify(user))
}

export const removeUser = () => {
  window.localStorage.removeItem(KEY)
}
