import { motion } from 'framer-motion';
import testimonialsData from '../data/testimonials.json';
import clientsData from '../data/clients.json';

function About({ openModal }) {
  const services = [
    
    {
      title: 'Web Development',
      description: 'High-quality development of sites at the professional level.',
      icon: '/assets/images/icon-dev.svg',
    },
    {
      title: 'Mobile Apps',
      description: 'Professional development of applications for iOS and Android.',
      icon: '/assets/images/icon-app.svg',
    },
    // {
    //   title: 'Front-End Development ',
    //   description: 'Modern and high-quality design made at a professional level.',
    //   icon: '/assets/images/icon-design.svg',
    // },
    // {
    //   title: 'Photography',
    //   description: 'High-quality photos of any category at a professional level.',
    //   icon: '/assets/images/photography.svg',
    // },
  ];

  return (
    <motion.section
      className="bg-secondary-dark border border-primary-dark rounded-2xl p-6 lg:p-8 shadow-card mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl lg:text-3xl font-semibold text-text-light mb-4">About Me</h2>
      <div className="border-b-2 border-accent-gold w-10 mb-6"></div>
      <p className="text-text-gray text-sm lg:text-base mb-4">
        I'm a passionate and hardworking software developer with a strong foundation
          in<span className="text-accent-gold">
            {" "}
            JavaScript, MERN Stack, and Full Stack Development
          </span> .
       My journey began with a curiosity for how things work, and evolved
          into a deep love for building scalable, real-world web applications.
      </p>
      <p className="text-text-gray text-sm lg:text-base mb-6">
        My job is to build your <span className="text-accent-gold">  Frontend / Backend / Mobile Applications </span> so that it is functional and user-friendly but at the same time
        attractive. I add a personal touch to your product and ensure it is eye-catching and easy to use.
      </p>

      <h3 className="text-xl lg:text-2xl font-semibold text-text-light mb-4">What I'm Doing</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-primary-dark p-6 rounded-xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4 mx-auto" />
            <h4 className="text-lg font-medium text-text-light mb-2">{service.title}</h4>
            <p className="text-text-gray text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      {/* <h3 className="text-xl lg:text-2xl font-semibold text-text-light mb-4">Testimonials</h3> */}
      {/* <div className="flex overflow-x-auto gap-6 pb-4">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="min-w-full md:min-w-[calc(50%-1.5rem)] bg-primary-dark p-6 rounded-xl shadow-card cursor-pointer hover:shadow-card-hover transition-shadow"
            onClick={() => openModal(testimonial)}
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-xl absolute -top-4 -left-4"
            />
            <h4 className="text-lg font-medium text-text-light mb-2 ml-20">{testimonial.name}</h4>
            <p className="text-text-gray text-sm line-clamp-3">{testimonial.text}</p>
          </div>
        ))}
      </div> */}

      {/* <h3 className="text-xl lg:text-2xl font-semibold text-text-light mb-4 mt-6">Clients</h3>
      <div className="flex overflow-x-auto gap-6 pb-4">
        {clientsData.map((client) => (
          <div key={client.id} className="min-w-[33.33%]">
            <img
              src={client.image}
              alt="Client"
              className="w-full h-auto rounded-xl filter grayscale hover:filter-none transition-all"
            />
          </div>
        ))}
      </div> */}
    </motion.section>
  );
}

export default About;