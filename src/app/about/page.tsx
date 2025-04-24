"use client";
import { useState } from "react";
import { FaLeaf, FaUtensils, FaHeart } from "react-icons/fa";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const extraRecipes = [
    "🍛 Spicy Butter Chicken",
    "🥗 Mediterranean Quinoa Salad",
    "🍜 Authentic Ramen Noodles",
    "🍕 Classic Margherita Pizza",
    "🥘 Traditional Biryani",
    "🍩 Homemade Glazed Donuts",
    "🍰 Classic Cheesecake",
    "🥑 Avocado Toast with Poached Egg",
    "🍲 Thai Green Curry",
    "🍪 Double Chocolate Chip Cookies",
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-orange-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-orange-700 mb-6 animate-fade-in">
          About Us
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-orange-600">Cooks Delight</span>,
          your go-to place for <strong>authentic flavors</strong> and{" "}
          <strong>mouth-watering recipes</strong>. We take pride in using{" "}
          <strong>fresh, high-quality ingredients</strong> to create dishes that
          satisfy your taste buds.
        </p>

        {/* Our Story (Glassmorphism Card) */}
        <div className="relative mt-10 flex justify-center">
          <div className="bg-white/40 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-orange-400 max-w-2xl text-left transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold text-orange-700 mb-3 flex items-center gap-2">
              <FaHeart className="text-red-500" /> Our Story
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Started as a small kitchen experiment, we grew into a brand that
              delivers <strong>love and passion</strong> through every dish. Our
              chefs blend <strong>traditional flavors</strong> with a modern
              touch, ensuring an unforgettable experience.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-10 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-orange-700 mb-6">
            Our Journey
          </h3>
          <div className="w-full max-w-3xl space-y-6">
            {/* Step 1 */}
            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <FaLeaf className="text-green-600 text-2xl" />
              <p className="text-lg text-gray-700">
                Started with fresh, organic ingredients to create unique recipes.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <FaUtensils className="text-orange-600 text-2xl" />
              <p className="text-lg text-gray-700">
                Launched our first online recipe platform, gaining recognition.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <FaHeart className="text-red-500 text-2xl" />
              <p className="text-lg text-gray-700">
                Built a community of food lovers, sharing flavors worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-10 text-left">
          <h3 className="text-2xl font-semibold text-orange-700 mb-3">
            Why Choose Us?
          </h3>
          <ul className="text-gray-700 text-lg space-y-2">
            <li>✅ Fresh & Organic Ingredients</li>
            <li>✅ Authentic & Fusion Recipes</li>
            <li>✅ Healthy & Hygienic Cooking</li>
            <li>✅ Fast & Friendly Service</li>
          </ul>
        </div>

        {/* Explore Recipes Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-orange-700 mb-3">
            Explore More Recipes
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {extraRecipes
              .slice(0, showMore ? extraRecipes.length : 5)
              .map((recipe, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                >
                  <p className="text-lg font-semibold text-gray-800">{recipe}</p>
                </div>
              ))}
          </div>

          {/* Show More Button */}
          <div className="mt-6">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-5 py-2 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-orange-700 transition duration-300"
            >
              {showMore ? "Show Less" : "Explore More Recipes"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
