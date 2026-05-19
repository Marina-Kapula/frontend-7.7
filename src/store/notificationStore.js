import { create } from 'zustand'

const useNotificationStore = create((set) => ({
  message: '',

  setNotification: (msg) => {
    set({ message: msg })

    setTimeout(() => {
      set({ message: '' })
    }, 3000)
  },
}))

export default useNotificationStore
