import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 lg:px-16">
      <div className="max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          Contact Us
        </h1>
        <p className="text-lg text-center mb-6">
          Have a question, suggestion, or want to collaborate? We&#039;d love to hear from you! Fill out the form below or use the provided contact details to get in touch.
        </p>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg sm:p-4 p-2">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100"
                placeholder="Write your message here"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
          <p className="sm:text-lg text-sm">
            <strong>Email:</strong> contact@techinsights.com
          </p>
          <p className="sm:text-lg text-sm">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="sm:text-lg text-sm">
            <strong>Address:</strong> 123 Tech Lane, Innovation City, AI 56789
          </p>
        </div>
      </div>
    </div>
  );
}
