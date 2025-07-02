import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const form = e.target.form;
    setIsValid(form.checkValidity());
  };

  return (
   <motion.section
  className="bg-secondary-dark border border-primary-dark rounded-2xl p-6 lg:p-8 shadow-card md:mb-6 mt-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <h2 className="text-2xl lg:text-3xl font-semibold text-text-light mb-4">Contact</h2>
  <div className="border-b-2 border-accent-gold w-10 mb-6"></div>

  {/* <div className="relative h-64 rounded-xl overflow-hidden mb-6">
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11908.89412853268!2d72.8093122!3d21.1702401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e5940973e7b%3A0xafe0f8b74f7e6cb0!2sSurat%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1729900000000"
      width="100%"
      height="100%"
      style={{ border: 0, filter: 'grayscale(1) invert(1)' }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div> */}

  <h3 className="text-xl lg:text-2xl font-semibold text-text-light mb-4">Contact Form</h3>
  <form className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        className="bg-primary-dark text-text-light border border-primary-dark rounded-xl p-3 focus:border-accent-gold outline-none"
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="bg-primary-dark text-text-light border border-primary-dark rounded-xl p-3 focus:border-accent-gold outline-none"
        onChange={handleInputChange}
      />
    </div>
    <textarea
      name="message"
      placeholder="Message"
      required
      className="bg-primary-dark text-text-light border border-primary-dark rounded-xl p-3 focus:border-accent-gold outline-none w-full h-32 resize-none"
      onChange={handleInputChange}
    ></textarea>
    <button
      type="submit"
      disabled={!isValid}
      className="bg-accent-gold text-primary-dark px-6 py-3 rounded-xl flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:bg-accent-gold-light transition-colors"
    >
      <FaPaperPlane />
      Send Message
    </button>
  </form>
</motion.section>
  );
}

export default Contact;