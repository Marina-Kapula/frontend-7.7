import { create } from 'zustand'

const useNotificationStore = create((set) => ({
  message: '',

  setNotification: (message) => {
    set({ message })
  },
}))

export default useNotificationStore
