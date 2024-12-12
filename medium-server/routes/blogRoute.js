import express from 'express';
import { blogs, getBlog, myBlogs } from '../controllers/blogController.js';
import { create } from '../controllers/blogController.js'
import { isAuthenticated } from '../authMiddleware.js';
import { deleteBlog } from '../controllers/blogController.js';

const blogRouter = express.Router();

blogRouter.post('/create', isAuthenticated, create);
blogRouter.get('/blogs', blogs);
blogRouter.get('/myBlogs',isAuthenticated, myBlogs);
blogRouter.get('/:id', getBlog);
blogRouter.delete('/delete/:id', isAuthenticated, deleteBlog);

export default blogRouter;