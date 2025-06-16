import React from 'react';

const projects = [
  {
    title: 'CodeHack',
    description: 'A source code website offering responsive templates, UI kits, and code snippets for developers to accelerate their projects.',
    tech: ['HTML', 'CSS', 'JavaScript','Angular'],
    link: '#'
  },
  {
    title: 'Fee Management System',
    description: 'A full-stack application to manage student fees, track payment history, generate invoices, and manage due reports for educational institutions.',
    tech: ['Angular.net', 'ASP net boiler plate', 'MYSQL', 'Asual data studio'],
    link: 'https://github.com/VanshikaThakur8/Fee_management_System'
  }
];

const Project = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 mt-10 font-sans text-gray-800">
      <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">My Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-orange-100 text-orange-700 px-4 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block text-sm text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-center"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;


