// src/components/Innovation.js
import React from "react";
import { Parallax } from "react-scroll-parallax";

const cards = [
  {
    icon: "🔗",
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    icon: "💡",
    title: "Simplify the complex",
    description:
      "Simplify complex processes and optimize your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    icon: "⚡",
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];

const Innovation = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">
        Human-centred innovation
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <Parallax key={index} speed={-10 + index * 5}>
            <div className="w-72 p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </Parallax>
        ))}
      </div>
    </section>
  );
};

export default Innovation;
