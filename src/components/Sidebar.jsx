import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { IoCode, IoCodeSlash, IoDownloadOutline } from 'react-icons/io5';
import SkillsCard from './ui/SkillsCard';
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const asideRef = useRef(null);
  const [expandedHeight, setExpandedHeight] = useState('auto');

  // Calculate the expanded height dynamically
  useEffect(() => {
    if (asideRef.current) {
      const height = asideRef.current.scrollHeight + 40;
      setExpandedHeight(`${height}px`);
    }
  }, [isOpen]);

  return (
    <motion.aside
      ref={asideRef}
      className="bg-secondary-dark border border-primary-dark rounded-2xl p-5 m-4 lg:m-8 lg:sticky lg:top-16 lg:max-w-sm overflow-hidden"
      initial={{ height: '310px' }}
      animate={{ height: isOpen ? expandedHeight : '310px' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="flex items-center gap-4">
        <img
          src="/assets/images/my-avatar2.jpg"
          alt="Avinash Singh"
          className="w-24 h-24 rounded-2xl"
        />
        <div>
          <h3 className="text-xl font-semibold text-text-light">Avinash Singh</h3>
          {/* <span className="bg-primary-dark text-text-light text-xs px-3 py-1 rounded-lg">
            Full Stack Developer
          </span> */}
            <div className="text-center mt-4 text-sm text-text-light">
              <IoCode className="inline text-accent-gold text-lg" /> Full Stack Developer | MERN Stack Developer | MCA Grad | DSA Learner | JavaScript | Node.js | React Js <IoCodeSlash className="inline text-accent-gold text-lg" />
            </div>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-accent-gold text-primary-dark p-2 rounded-lg flex items-center justify-center mx-auto mt-4"
      >
        {isOpen ? 'Hide' : 'Show'} More Info
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent-gold" />
                <div>
                  <span className="text-xs text-text-gray uppercase">Email</span>
                  <p className="text-sm text-text-light">Avinashsingh.codes@gmail.com</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-accent-gold" />
                <div>
                  <span className="text-xs text-text-gray uppercase">Phone</span>
                  <p className="text-sm text-text-light">+91 9328705012</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaBirthdayCake className="text-accent-gold" />
                <div>
                  <span className="text-xs text-text-gray uppercase">Birthday</span>
                  <p className="text-sm text-text-light">July 13, 2002</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent-gold" />
                <div>
                  <span className="text-xs text-text-gray uppercase">Location</span>
                  <p className="text-sm text-text-light">Surat, Gujarat, India</p>
                </div>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/avinashs1ngh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-gray hover:text-accent-gold"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://twitter.com/tweetbyavi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-gray hover:text-accent-gold"
                aria-label="Twitter Profile"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://github.com/avinashs1ngh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-gray hover:text-accent-gold"
                aria-label="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>
            </div>
          
            <a
              href="/assets/docs/resume.pdf"
              download
              className="relative inline-flex items-center justify-center mx-auto mt-4 p-2 px-5 bg-gradient-to-r from-primary-dark to-accent-gold text-text-light font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-gold to-primary-dark opacity-0 hover:opacity-100 transition-opacity rounded-lg"></span>
              <span className="relative flex items-center">
                Download Resume
                <IoDownloadOutline className="ml-2 text-lg animate-bounce" />
              </span>
            </a>
             <div className="border-t-2 border-accent-gold rounded-2xl p-2 mt-4  ">
         <h2 className="text-xl font-semibold text-text-light mb-4">My Skills</h2>

         <SkillsCard/>
         </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
}

export default Sidebar;