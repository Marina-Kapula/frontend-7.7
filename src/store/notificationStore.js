import { create } from 'zustand'

const useNotificationStore = create((set) => ({
  message: '',

  setNotification: (message) => {
    set({ message })

    setTimeout(() => {
      set({ message: '' })
    }, 3000)
  },
}))

export default useNotificationStore
