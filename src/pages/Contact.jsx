import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4arauk8',         // ✅ your service ID
      'template_v090dpk',        // ✅ your template ID
      e.target,
      '-Na6ZgIlYWPOyg58f'        // ✅ your public key
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send message.');
      }
    );

    e.target.reset(); // Clear form
  };

  return (
    <section className="max-w-3xl mx-auto p-6 mt-10 font-sans text-gray-800">
      <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">Contact Me</h2>

      <form onSubmit={sendEmail} className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition duration-200 cursor-pointer"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-gray-600">
        <p>Email: <a href="mailto:vanshikathakur930@gmail.com" className="text-orange-500 hover:underline">vanshikathakur930@gmail.com</a></p>
        <p>Location: Shivpuri, Madhya Pradesh</p>
      </div>
    </section>
  );
};

export default Contact;
