import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

function Modal({ data, closeModal }) {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-overlay-dark z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={closeModal}
      ></motion.div>
      <motion.div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary-dark border border-primary-dark rounded-2xl p-6 max-w-lg w-full z-20"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-text-light hover:text-accent-gold"
        >
          <FaTimes size={20} />
        </button>
        <div className="flex items-start gap-4">
          <img src={data.avatar} alt={data.name} className="w-16 h-16 rounded-xl" />
          <div>
            <h4 className="text-lg font-medium text-text-light">{data.name}</h4>
            <span className="text-sm text-text-gray">{data.date}</span>
            <p className="text-sm text-text-gray mt-2">{data.text}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Modal;