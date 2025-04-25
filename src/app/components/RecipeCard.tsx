import Image from "next/image";

interface RecipeProps {
  title: string;
  image: string;
  description: string;
  time: string;
  difficulty: string;
  servings: string;
  link: string;
}

export default function RecipeCard({
  title,
  image,
  description,
  time,
  difficulty,
  servings,
  link,
}: RecipeProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 border border-gray-200 transition-transform transform hover:scale-105 max-w-sm w-full">
      {/* Replaced img with Image component from Next.js */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill" // This will make the image responsive
          objectFit="cover" // Ensures the image covers the container without stretching
          className="rounded-lg"
        />
      </div>
      
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="text-gray-700 text-xs mt-2 flex flex-wrap gap-2">
          <span className="bg-gray-200 px-2 py-1 rounded">{time}</span>
          <span className="bg-gray-200 px-2 py-1 rounded">{difficulty}</span>
          <span className="bg-gray-200 px-2 py-1 rounded">{servings}</span>
        </div>
      </div>
    </div>
  );
}
