import { create } from 'zustand'
import blogsService from '../services/blogs'

const useBlogStore = create((set, get) => ({
  blogs: [],

  fetchBlogs: async () => {
    const blogs = await blogsService.getAll()
    set({ blogs })
  },

  createBlog: async (blog) => {
    const newBlog = await blogsService.create(blog)
    set((state) => ({
      blogs: state.blogs.concat(newBlog),
    }))
  },

  likeBlog: async (id) => {
    const blog = get().blogs.find((b) => String(b.id) === String(id))
    if (!blog) return

    const updated = {
      ...blog,
      likes: (blog.likes ?? 0) + 1,
    }

    const returned = await blogsService.update(id, updated)

    set((state) => ({
      blogs: state.blogs.map((b) =>
        String(b.id) === String(id) ? returned : b,
      ),
    }))
  },

  removeBlog: async (id) => {
    await blogsService.remove(id)

    set((state) => ({
      blogs: state.blogs.filter((b) => String(b.id) !== String(id)),
    }))
  },
}))

export default useBlogStore
