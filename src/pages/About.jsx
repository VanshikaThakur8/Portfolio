import React from 'react';

const About = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 mt-10 font-sans text-gray-800">
      <h2 className="text-3xl font-bold text-orange-500 mb-4 text-center">About Me</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6 leading-relaxed text-justify">
        <p className="mb-4">
          Hello! I'm <span className="font-semibold text-orange-500">Vanshika Thakur</span>, a passionate and dedicated <span className="font-semibold">Frontend Developer</span> with experience in creating responsive, dynamic, and accessible user interfaces using HTML, CSS, JavaScript and React.js.
        </p>
        
        <p className="mb-4">
          I believe in the power of clean, maintainable code and love transforming ideas into interactive digital experiences. Whether it's a personal portfolio, an e-commerce site, or a modern web app, I enjoy building web products that are not just visually stunning but also perform smoothly across all devices.
        </p>

        <p className="mb-4">
          My academic journey has equipped me with a solid foundation in programming and problem-solving. With hands-on training and project experience in Full Stack Development, I’ve become comfortable working in both frontend and backend environments, though frontend remains my favorite area.
        </p>

        <p className="mb-4">
          Outside of coding, I enjoy exploring art & craft, which helps me bring a creative edge to my design thinking. I also love collaborating with teams, learning new technologies, and continuously improving my skills.
        </p>

        <p className="mt-6 font-semibold text-orange-400">
          Let’s build something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;

