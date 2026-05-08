import { create } from 'zustand'

const useNotificationStore = create((set) => ({
  notification: '',

  setNotification: (message) => set({ notification: message }),

  clearNotification: () => set({ notification: '' }),
}))

export default useNotificationStore
