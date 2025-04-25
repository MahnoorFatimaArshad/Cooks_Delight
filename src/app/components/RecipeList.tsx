// components/RecipeList.tsx
import RecipeCard from './RecipeCard';

const RecipeList = () => {
  const recipeData = [
    {
      title: 'Lemon Garlic Roasted Chicken',
      image: '/images/lemon-chicken.jpg', // Image URL for this recipe
      description: 'A delicious roasted chicken with lemon and garlic flavors.',
      time: '1 hour 30 minutes',
      difficulty: 'Medium',
      servings: '4 servings',
      link: '/recipes/lemon-garlic-roasted-chicken', // Recipe detail page link
    },
    {
      title: 'Spaghetti Carbonara',
      image: '/images/spaghetti-carbonara.jpg', // Image URL for this recipe
      description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
      time: '30 minutes',
      difficulty: 'Easy',
      servings: '4 servings',
      link: '/recipes/spaghetti-carbonara',
    },
    {
      title: 'Chocolate Chip Cookies',
      image: '/images/chocolate-chip-cookies.jpg', // Image URL for this recipe
      description: 'Soft and chewy chocolate chip cookies.',
      time: '45 minutes',
      difficulty: 'Easy',
      servings: '12 cookies',
      link: '/recipes/chocolate-chip-cookies',
    },
    {
      title: 'Caesar Salad',
      image: '/images/caesar-salad.jpg', // Image URL for this recipe
      description: 'A classic Caesar salad with crunchy croutons and creamy dressing.',
      time: '15 minutes',
      difficulty: 'Easy',
      servings: '4 servings',
      link: '/recipes/caesar-salad',
    },
    {
      title: 'Grilled Steak',
      image: '/images/grilled-steak.jpg', // Image URL for this recipe
      description: 'Perfectly grilled steak with a savory seasoning.',
      time: '20 minutes',
      difficulty: 'Medium',
      servings: '2 servings',
      link: '/recipes/grilled-steak',
    },
    {
      title: 'Vegetable Stir-Fry',
      image: '/images/vegetable-stir-fry.jpg', // Image URL for this recipe
      description: 'A quick and healthy stir-fry with a variety of fresh vegetables.',
      time: '25 minutes',
      difficulty: 'Easy',
      servings: '4 servings',
      link: '/recipes/vegetable-stir-fry',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {recipeData.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.title}
          image={recipe.image}
          description={recipe.description}
          time={recipe.time}
          difficulty={recipe.difficulty}
          servings={recipe.servings}
          link={recipe.link}
        />
      ))}
    </div>
  );
};

export default RecipeList;
