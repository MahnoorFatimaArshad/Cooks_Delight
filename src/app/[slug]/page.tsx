'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';

// Custom Recipe Type
type Recipe = {
  title: string;
  image: string;
  ingredients: string[];
};

// Recipe Data
const recipes: Record<string, Recipe> = {
  'lemon-garlic-roasted-chicken': {
    title: 'Lemon Garlic Roasted Chicken',
    image: '/images/lemon-chicken.jpg',
    ingredients: [
      '1 whole chicken (about 3-4 pounds)',
      '2 lemons, sliced',
      '6 cloves garlic, minced',
      '2 tbsp olive oil',
      '1 tsp dried thyme',
      '1 tsp dried rosemary',
    ],
  },
};

// Component
export default function RecipeDetail({ params }: { params: { slug: string } }) {
  const recipe = recipes[params.slug];

  if (!recipe) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
        {recipe.title}
      </h1>

      <div className="mb-8 rounded-xl overflow-hidden shadow-md">
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={800}
          height={500}
          className="w-full h-auto object-cover rounded-xl"
          priority
        />
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">Ingredients</h2>

      <ul className="list-disc pl-5 sm:pl-8 text-base sm:text-lg text-gray-600 space-y-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}
