import { useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import FilterSelect from './FilterSelect';

function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category.toLowerCase() === filter);

  return (
    <motion.section
      className="bg-secondary-dark border border-primary-dark rounded-2xl p-6 lg:p-8 shadow-card mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl lg:text-3xl font-semibold text-text-light mb-4">Projects</h2>
      <div className="border-b-2 border-accent-gold w-10 mb-6"></div>

      <FilterSelect filter={filter} setFilter={setFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="relative bg-primary-dark rounded-xl shadow-card hover:shadow-card-hover transition-shadow"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <a href={project.link}>
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <i className="fas fa-link text-accent-gold text-2xl opacity-0 hover:opacity-100 transition-opacity"></i>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-medium text-text-light">{project.title}</h4>
                <p className="text-sm text-text-gray">{project.category}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;