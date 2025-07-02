import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Modal from './components/Modal';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});



  const closeModal = () => {
    setIsModalOpen(false);
    setModalData({});
  };

  return (
    <Router>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar />
        <main className="flex-1 p-4 lg:p-8">
          <Navbar />
          <Routes>
            <Route path="/" element={<About  />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/blog" element={<Blog />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {isModalOpen && <Modal data={modalData} closeModal={closeModal} />}
      </div>
    </Router>
  );
}

export default App;