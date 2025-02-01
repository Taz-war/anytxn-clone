// src/components/Features.js
import React from "react";
import { Parallax } from "react-scroll-parallax";

const features = [
  {
    title: "Secure Payments",
    description: "State-of-the-art encryption ensures your data is safe.",
  },
  {
    title: "Global Access",
    description: "Transact from anywhere in the world, anytime.",
  },
  {
    title: "Real-Time Updates",
    description: "Instant notifications for every transaction.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <Parallax speed={-10}>
          <h2 className="text-4xl font-bold mb-8">Our Features</h2>
        </Parallax>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Parallax key={index} speed={index % 2 === 0 ? 5 : -5}>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
