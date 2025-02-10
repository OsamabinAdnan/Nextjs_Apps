import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          About Us
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold">Tech Insights</span>, your go-to destination for all things Artificial Intelligence (AI) and Information Technology (IT). Our mission is to bridge the gap between technology enthusiasts and groundbreaking advancements in AI and IT by providing insightful blogs, tutorials, and industry updates.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg leading-relaxed mb-6">
          We are a team of passionate writers, developers, and AI enthusiasts dedicated to sharing knowledge about the ever-evolving world of technology. Whether you're a tech professional, a student, or just a curious mind, you'll find content that caters to your interests and inspires you to learn more.
        </p>
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>In-depth articles about the latest trends in AI and IT.</li>
          <li>Step-by-step tutorials to help you build and deploy projects.</li>
          <li>Expert opinions and interviews with industry leaders.</li>
          <li>Reviews and recommendations of tools and technologies.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg leading-relaxed mb-6">
          At Tech Insights, we envision a future where knowledge about AI and IT is accessible to everyone. We aim to empower individuals and businesses to harness the power of technology to solve real-world problems and drive innovation.
        </p>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h2>
          <p className="text-lg text-center">
            Have questions, feedback, or collaboration ideas? We'd love to hear from you! Reach out to us through our <a href="/contact" className="text-primary font-semibold hover:underline">Contact Page</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
