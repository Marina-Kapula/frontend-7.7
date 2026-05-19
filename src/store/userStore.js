import { create } from 'zustand'
import persistentUser from '../services/persistentUser'

const useUserStore = create((set) => ({
  user: persistentUser.getUser(),

  setUser: (user) => {
    set({ user })
    persistentUser.saveUser(user)
  },

  clearUser: () => {
    set({ user: null })
    persistentUser.removeUser()
  },
}))

export default useUserStore
