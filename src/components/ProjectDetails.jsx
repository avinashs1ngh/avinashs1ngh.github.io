import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import projectsData from '../data/projects.json';

function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  if (!project) {
    return (
      <motion.section
        className="bg-secondary-dark border border-primary-dark rounded-2xl p-6 lg:p-8 shadow-card m-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl lg:text-3xl font-semibold text-text-light">Project Not Found</h2>
      </motion.section>
    );
  }

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  return (
    <motion.section
      className="bg-secondary-dark border border-primary-dark rounded-2xl p-6 lg:p-8 shadow-card m-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl lg:text-3xl font-semibold text-text-light">{project.title}</h2>
        <Link
          to="/Projects"
          className="text-accent-gold hover:text-text-light transition-colors"
        >
          <FaArrowLeft size={24} />
        </Link>
      </div>
      <div className="border-b-2 border-accent-gold w-10 mb-6"></div>

      <div className="lg:flex lg:gap-8">
        {/* Screenshot Carousel */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <div className="relative rounded-xl overflow-hidden">
            <motion.img
              key={project.screenshots[currentScreenshot]}
              src={project.screenshots[currentScreenshot]}
              alt={`${project.title} screenshot ${currentScreenshot + 1}`}
              className="w-full h-64 lg:h-96 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 flex justify-between items-center px-4">
              <button
                onClick={prevScreenshot}
                className="bg-accent-gold text-primary-dark p-2 rounded-full hover:bg-text-light transition-colors"
              >
                &larr;
              </button>
              <button
                onClick={nextScreenshot}
                className="bg-accent-gold text-primary-dark p-2 rounded-full hover:bg-text-light transition-colors"
              >
                &rarr;
              </button>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {project.screenshots.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentScreenshot ? 'bg-accent-gold' : 'bg-text-gray'
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="lg:w-1/2">
          <h3 className="text-xl font-semibold text-text-light mb-2">{project.category}</h3>
          <p className="text-text-gray text-sm mb-4">{project.description}</p>

          <h4 className="text-lg font-medium text-text-light mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-t from-primary-dark to-accent-gold text-text-light rounded text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>

          <h4 className="text-lg font-medium text-text-light mb-2">Links</h4>
          <div className="flex gap-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent-gold text-primary-dark rounded-lg hover:bg-text-light transition-transform transform hover:scale-105"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary-dark text-text-light rounded-lg hover:bg-accent-gold hover:text-primary-dark transition-transform transform hover:scale-105"
              >
                <FaGithub /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectDetails;