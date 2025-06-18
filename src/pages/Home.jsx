import React from 'react';
import profile from '../assets/profile.jpg'; 
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import resumePDF from '../assets/Resume.pdf';



// function Home() {
    const Home = () => {
  const navigate = useNavigate();
 
  const goToContact =() => {
    navigate('/contact')
  };


  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left content */}
        <div className="md:w-1/2">
          <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-purple-500 animate-bounce tracking-wide">HELLO!!!</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            I'm <span className="text-orange-600">Vanshika Thakur</span><br />a Frontend Developer
          </h1>
          <p className="text-gray-600 mb-6">
              Welcome to my portfolio! I'm Vanshika, 
              a creative and detail-driven frontend developer with a passion for designing elegant, responsive, and user-friendly websites. 
              I bring ideas to life through clean code and thoughtful design, ensuring every project I work on delivers an engaging digital experience.
          </p>
          <div className="flex gap-4 items-center mt-4">
            <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition cursor-pointer" onClick={goToContact} >Hire Me</button>
           
<button
  onClick={() => window.open(resumePDF, '_blank')}
  className="px-6 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-100 transition cursor-pointer"
>Resume</button>
            <a
    href="https://github.com/VanshikaThakur8"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 border border-orange-600 rounded-lg hover:bg-orange-100 transition text-xl"
  >
    <FaGithub />
  </a>

  {/* LinkedIn Icon Button */}
  <a
    href="https://www.linkedin.com/in/vanshika-thakur-b677b6249/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 border border-orange-600 rounded-lg hover:bg-orange-100 transition text-xl"
  >
    <FaLinkedin />
  </a>
          </div>
        </div>

        {/* Right image */}
        <div className="md:w-1/2">
          <img src={profile} alt="profile" className="w-full max-w-sm mx-auto rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default Home;
