"use client";
import { useState } from "react";
import { 
  FaFire, FaLeaf, FaClock, FaUtensils, 
  FaFlask, FaQuestionCircle, FaBookOpen 
} from "react-icons/fa";

const beginnerTips = [
  { icon: <FaFire className="text-red-500 text-3xl" />, tip: "Always preheat your oven for even cooking." },
  { icon: <FaLeaf className="text-green-500 text-3xl" />, tip: "Use fresh herbs for natural flavor enhancement." },
  { icon: <FaClock className="text-blue-500 text-3xl" />, tip: "Let meat rest after cooking for juicier results." },
];

const intermediateTips = [
  { icon: <FaUtensils className="text-orange-500 text-3xl" />, tip: "Sharpen knives regularly for safer cutting." },
  { icon: <FaFlask className="text-purple-500 text-3xl" />, tip: "Use baking soda to neutralize acidity in sauces." },
  { icon: <FaClock className="text-yellow-500 text-3xl" />, tip: "Learn proper timing for seasoning dishes." },
];

const advancedTips = [
  { icon: <FaFire className="text-pink-500 text-3xl" />, tip: "Master the Maillard reaction for perfect searing." },
  { icon: <FaLeaf className="text-teal-500 text-3xl" />, tip: "Experiment with sous-vide cooking for precise doneness." },
  { icon: <FaFlask className="text-indigo-500 text-3xl" />, tip: "Use emulsification techniques for smooth sauces." },
];

const faqs = [
  { question: "How do I make my dishes less salty?", answer: "Add a bit of lemon juice or a raw potato to absorb excess salt." },
  { question: "Why should I let meat rest after cooking?", answer: "Resting allows the juices to redistribute, making the meat juicier." },
  { question: "What's the best oil for high-heat cooking?", answer: "Use oils with high smoke points like avocado or peanut oil." },
];

const CookingTips = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-yellow-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-yellow-700 mb-6 animate-fade-in">
          Cooking Tips & Techniques
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Improve your cooking skills with these <strong>pro tips</strong>! Whether you're a beginner or an advanced cook, these tips will help you cook like a chef. 🍽️🔥
        </p>

        {/* Tips by Skill Level */}
        <div className="mt-10">
          {[
            { title: "👩‍🍳 Beginner Tips", tips: beginnerTips },
            { title: "🥄 Intermediate Tips", tips: intermediateTips },
            { title: "🔥 Advanced Tips", tips: advancedTips },
          ].map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-yellow-700 mt-10 mb-4">{category.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.tips.map((tip, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 transition-transform transform hover:scale-105 hover:shadow-lg">
                    {tip.icon}
                    <p className="text-lg text-gray-800">{tip.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-semibold text-yellow-700 mb-6 flex items-center gap-2">
            <FaQuestionCircle className="text-yellow-600" /> Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-yellow-300">
                <button 
                  className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-800" 
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  {faq.question}
                  <span>{openFAQ === index ? "−" : "+"}</span>
                </button>
                {openFAQ === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-yellow-700 mb-3 flex items-center justify-center gap-2">
            <FaBookOpen className="text-yellow-600" /> Want to Learn More?
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our <strong>cooking courses and masterclasses</strong> to take your skills to the next level. Whether you're a beginner or a pro, there's always more to learn in the world of cooking! 🍽️🔥
          </p>
          <button className="mt-6 px-5 py-2 bg-yellow-600 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-700 transition duration-300">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CookingTips;
