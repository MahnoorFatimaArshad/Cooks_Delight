import Image from 'next/image';
import { notFound } from 'next/navigation';

const recipes: Record<string, { title: string; image: string; ingredients: string[] }> = {
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

export default function RecipeDetail({ params }: { params: { slug: string } }) {
  const recipe = recipes[params.slug];

  // If the recipe is not found, show a 404 page
  if (!recipe) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <Image src={recipe.image} alt={recipe.title} width={800} height={500} className="rounded-lg mb-8" />
      <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
      <ul className="list-disc pl-8">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

