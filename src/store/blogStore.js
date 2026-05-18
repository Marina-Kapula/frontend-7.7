import { create } from 'zustand'
import blogsService from '../services/blogs'

const useBlogStore = create((set) => ({
  blogs: [],

  fetchBlogs: async () => {
    const blogs = await blogsService.getAll()
    set({ blogs })
  },
}))

export default useBlogStore
