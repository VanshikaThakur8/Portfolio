import React from 'react';
import profileImage from '../assets/profile.jpg';

const App = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8 font-sans text-gray-800">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-orange-500">Vanshika Thakur</h1>
        <p>Email: <a href="mailto:vanshikathakur930@gmail.com" className="text-blue-600 hover:underline">vanshikathakur930@gmail.com</a></p>
        <p>Phone: +91 86299-02299 | Shivpuri, Madhya Pradesh</p>
        <div className="flex justify-center mt-4">
          <img src={profileImage} alt="Vanshika" className="w-32 h-32 rounded-full border-4 border-orange-300 shadow-lg object-cover" />
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-orange-400 mb-2">Summary</h2>
        <p>
          To work with an organization where I can learn new skills and use my abilities to achieve organizational goals as well as personal growth.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-orange-400 mb-2">Training Experience</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Web Developer – Indo German Tool Room, Indore (01–15 March 2023)</li>
          <li>AI For Future Workshop – Intel Digital Readiness (May 2024)</li>
          <li>Full Stack Developer – Ezulix Pvt. Ltd., Jaipur (24 July – 20 Sep 2024)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-orange-400 mb-2">Education</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>B.Tech in CSE – UIT RGPV, Shivpuri (Nov 2021 – June 2025) | CGPA: 7.76</li>
          <li>Higher Secondary – Rangarh’s Rainbow H.S. School (2021) | 87.8%</li>
          <li>High School – Rangarh’s Rainbow H.S. School (2019) | 84.0%</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-orange-400 mb-2">Skills & Hobbies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
          {[
            "Full Stack Development","React.js", "Python", "C/C++", "C#", "SQL",
            "Leadership", "Teamwork", "Art & Craft"
          ].map((skill) => (
            <div
              key={skill}
              className="bg-orange-100 text-orange-700 px-3 py-2 rounded-md text-sm text-center font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-orange-400 mb-2">Project</h2>

      {/* Project 1 */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-1">Source Code Website</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Offers a wide range of source codes and templates for website design</li>
            <li>Resources for HTML, CSS, JS, React.js and various frameworks</li>
            <li>Responsive templates and search functionality</li>
            <li>Updated with trending elements</li>
          </ul>
        </div>

      {/* Project 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-1">Fee Management System</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Developed a web-based application for managing student fees and payments</li>
            <li>Included modules for invoice generation, due tracking, and receipt printing</li>
            <li>Integrated secure admin login and real-time fee status updates</li>
            <li>Built using Angular.net, ASP net boiler plate, My Sql, Asual data studio.</li>
          </ul>
        </div>

      </section>

      <section>
        <h2 className="text-xl font-semibold text-orange-400 mb-2">Certifications</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Web Development – MSME, IGTR Indore (Mar 2021)</li>
          <li>C++ Programming – Vasureta-ULSA (June 2023)</li>
          <li>SQL – Udemy (April 2023)</li>
          <li>Python – GUVI, IITM R. Park (Aug 2023)</li>
          <li>TCS iON Career Edge – (May 2023)</li>
          <li>E-Science & E-Research – BVICAM, New Delhi (May 2023)</li>
          <li>Python Essentials 1 & 2 – Cisco (Aug 2023)</li>
        </ul>
      </section>
    </div>
  );
};

export default App;
 