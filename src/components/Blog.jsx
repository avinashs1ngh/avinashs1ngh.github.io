import { motion } from 'framer-motion';
import blogData from '../data/blog.json';

function Blog() {
  return (
    <motion.section
      className="bg-secondary-dark border border-primary-dark rounded-2xl p-6 lg:p-8 shadow-card mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl lg:text-3xl font-semibold text-text-light mb-4">Blog</h2>
      <div className="border-b-2 border-accent-gold w-10 mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogData.map((post) => (
          <motion.div
            key={post.id}
            className="bg-primary-dark rounded-xl shadow-card hover:shadow-card-hover transition-shadow"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-text-gray mb-2">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-text-gray rounded-full"></span>
                  <span>{post.date}</span>
                </div>
                <h4 className="text-lg font-medium text-text-light mb-2 hover:text-accent-gold transition-colors">
                  {post.title}
                </h4>
                <p className="text-sm text-text-gray">{post.text}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Blog;