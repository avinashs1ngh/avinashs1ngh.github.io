import { motion } from 'framer-motion';
import educationData from '../data/education.json';
  const experiences = [

     {
      title: "MERN Stack Developer",
      company: "SiliconLeaf Corporation Private Limited",
      duration: "May 2025 - Present",
      description: [
        "Developed Web Application in Using Mongo, Express, React, Node.",
        "Collaborated with the team to Optimize Project Development and meet business objectives.",
        "Developed Betting Application Similar to Aviator Using Express js and Socket.IO.",
      ],
    },
     {
      title: "Full Stack Developer",
      company: "ANS IT India Pvt. Ltd.",
      duration: "July 2024 - May 2025",
      description: [
        "Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Built and deployed the OneOPS platform for managing projects, tasks, inventory, and CRM functionalities.",
        "Contributed to both web and mobile versions (React Native) and handled production deployment on Ubuntu VPS.",
      ],
    },
    {
      title: "Full Stack Java Developer Intern",
      company: "NJ Technologies India Pvt. Ltd.",
      duration: "Dec 2023 - June 2024",
      description: [
        "Developed RESTful APIs using Java and Spring MVC for mobile app integration.",
        "Collaborated with the team to optimize existing project modules and meet business objectives.",
        "Implemented key features to enhance mutual fund services and improve customer experience.",
      ],
    },
   
  ];


  
function Journey() {
  return (
    <motion.section
      className="bg-secondary-dark border border-primary-dark rounded-2xl p-6 lg:p-8 shadow-card mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl lg:text-3xl font-semibold text-text-light mb-4">Eductaion & Experince</h2>
      <div className="border-b-2 border-accent-gold w-10 mb-6"></div>

      <h3 className="text-xl lg:text-2xl font-semibold text-text-light mb-4">Education</h3>
      <div className="relative pl-12 mb-6">
        {educationData.map((edu, index) => (
          <div key={edu.id} className="mb-6 relative">
            <div className="absolute -left-10 top-0 w-2 h-2 bg-accent-gold rounded-full border-2 border-primary-dark"></div>
            {index !== educationData.length - 1 && (
              <div className="absolute -left-10 top-2 w-0.5 h-full bg-primary-dark"></div>
            )}
            <h4 className="text-lg font-medium text-text-light">{edu.title}</h4>
            <span className="text-sm text-accent-gold-light">{edu.duration}</span>
            <p className="text-text-gray text-sm mt-2">{edu.description}</p>
          </div>
        ))}
      </div>

    <h3 className="text-xl lg:text-2xl font-semibold text-text-light mb-4">Experience</h3>
    <div className="relative pl-12 mb-6">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6 relative">
            <div className="absolute -left-10 top-0 w-2 h-2 bg-accent-gold rounded-full border-2 border-primary-dark"></div>
            {index !== experiences.length - 1 && (
              <div className="absolute -left-10 top-2 w-0.5 h-full bg-primary-dark"></div>
            )}
            <h4 className="text-lg font-medium text-text-light">{exp.title}</h4>
            <p className="text-sm text-text-gray">{exp.company}</p>
            <span className="text-sm text-accent-gold-light">{exp.duration}</span>
            <ul className="text-text-gray text-sm mt-2 pl-5 list-[→]">
              {exp.description.map((item, idx) => (
                <li key={idx} className="mb-1">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* <h3 className="text-xl lg:text-2xl font-semibold text-text-light mb-4">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((skill) => (
          <div key={skill.id} className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-text-light">{skill.title}</span>
              <span className="text-sm text-text-gray">{skill.percentage}%</span>
            </div>
            <div className="bg-primary-dark h-2 rounded-full">
              <div
                className="bg-accent-gold h-full rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div> */}
    </motion.section>
  );
}

export default Journey;