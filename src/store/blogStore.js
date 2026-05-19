import { create } from 'zustand'
import blogService from '../services/blogs'

const useBlogStore = create((set, get) => ({
  blogs: [],

  fetchBlogs: async () => {
    const blogs = await blogService.getAll()
    set({ blogs })
  },

  likeBlog: (id) => {
    const blogs = get().blogs.map((b) =>
      b.id === id ? { ...b, likes: b.likes + 1 } : b,
    )
    set({ blogs })
  },

  deleteBlog: (id) => {
    set({ blogs: get().blogs.filter((b) => b.id !== id) })
  },
}))

export default useBlogStore
