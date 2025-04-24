"use client";
import { useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const recipes = [
    {
      title: "Savory Herb Infused Chicken",
      image: "/images/lemon-chicken.jpg",
      description: "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken.",
      time: "40 MIN-",
      difficulty: "EASY PREP-",
      servings: "3 SERVES",
      link: "/recipes/lemon-herb-chicken",
    },
    {
      title: "Decadent Chocolate Mousse",
      image: "/images/Decadent Chocolate Mousse.jpg",
      description: "Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!",
      time: "30 MIN-",
      difficulty: "MEDIUM PREP-",
      servings: "4 SERVES",
      link: "/recipes/chocolate-mousse",
    },
    {
      title: "Classic Margherita Pizza",
      image: "/images/margherita-pizza.jpg",
      description: "Experience the taste of Italy with our classic Margherita pizza, topped with fresh basil and mozzarella.",
      time: "25 MIN-",
      difficulty: "EASY PREP-",
      servings: "2 SERVES",
      link: "/recipes/margherita-pizza",
    },
    {
      title: "Homemade Glazed Donuts",
      image: "/images/glazed-donuts.jpg",
      description: "Soft, fluffy, and coated in a sweet glaze, these homemade donuts are simply irresistible!",
      time: "50 MIN-",
      difficulty: "MEDIUM PREP-",
      servings: "6 SERVES",
      link: "/recipes/glazed-donuts",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 2 < recipes.length) {
      setStartIndex(startIndex + 2);
    }
  };

  const handlePrev = () => {
    if (startIndex - 2 >= 0) {
      setStartIndex(startIndex - 2);
    }
  };

  return (
    <div className="bg-gray-100 border border-gray-300 rounded-2xl mt-12 py-10 relative w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center sm:text-left mb-4 sm:mb-0">
            SIMILAR RECIPES
          </h1>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              className="bg-gray-200 text-xl px-3 py-2 border border-gray-400 rounded-full hover:bg-gray-300 transition"
              disabled={startIndex === 0}
            >
              {"<"}
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-200 text-xl px-3 py-2 border border-gray-400 rounded-full hover:bg-gray-300 transition"
              disabled={startIndex + 2 >= recipes.length}
            >
              {">"}
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex justify-center gap-6 transition-all duration-300 ease-in-out">
            {recipes.slice(startIndex, startIndex + 2).map((recipe, index) => (
              <div key={index} className="w-full max-w-md">
                <RecipeCard {...recipe} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
