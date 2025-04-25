import { FaClock, FaUtensils, FaUserFriends } from "react-icons/fa"; 
import Recipes from "./recipes/page";
import SubscribeSection from "./components/subscribe";

export default function Home() {
  return (
    <div className="mt-0">
      <section className="py-12 border border-gray-400 rounded-lg">
        {/* Recipe Button */}
        <div className="text-center mb-6">
          <a
            href="/recipes"
            className="bg-red-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300"
          >
            Recipes
          </a>
        </div>

        {/* Recipe Title */}
        <h6 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-black text-center mb-4">
          LEMON GARLIC <br /> ROASTED CHICKEN
        </h6>

        {/* Description */}
        <p className="text-gray-400 text-center text-lg md:text-2xl mx-auto max-w-3xl space-y-4">
          A delightful recipe that combines the zesty tang of lemons with the
          rich, aromatic flavors of garlic. Perfect for family dinners or
          special occasions, this dish is simple yet sophisticated. Juicy and
          tender, it's sure to impress your guests. Try it today and elevate
          your cooking game with this timeless classic!
        </p>

        {/* Time, Prep, and Serves */}
        <div className="text-black font-medium flex flex-wrap justify-center items-center gap-4 mt-8 text-lg md:text-xl">
          <div className="flex items-center gap-1">
            <FaClock className="text-black" />
            <span>1 HOUR</span>
          </div>
          <span className="mx-1">•</span>
          <div className="flex items-center gap-1">
            <FaUtensils className="text-black" />
            <span>HARD PREP</span>
          </div>
          <span className="mx-1">•</span>
          <div className="flex items-center gap-1">
            <FaUserFriends className="text-black" />
            <span>4 SERVES</span>
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-auto mt-6 flex justify-center">
          <img
            src="/images/lemon-chicken.jpg"
            alt="Lemon Chicken"
            className="w-[90%] md:w-[80%] lg:w-[70%] h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Content Blocks */}
        <div className="mt-8 space-y-8">
          {/* First Block */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side: Paragraph */}
            <div className="md:w-2/3 ml-4">
              <p className="text-gray-500 text-lg md:text-2xl ml-14">
                This Lemon Garlic Roasted Chicken recipe is the perfect balance of tangy citrus and savory garlic. It's a classic recipe that guarantees juicy, flavorful chicken every time. This Lemon Garlic Roasted Chicken recipe is the perfect balance of tangy citrus and savory garlic. It's a classic recipe that guarantees juicy, flavorful chicken every time.
              </p>
              <br />
              <p className="text-gray-500 text-lg md:text-2xl ml-14">
                This Lemon Garlic Roasted Chicken recipe is the perfect balance
                of tangy citrus and savory garlic. It's a classic recipe that guarantees juicy, flavorful chicken every time. This Lemon Garlic Roasted Chicken recipe is the perfect balance of tangy citrus and savory garlic. It's a classic recipe that guarantees juicy, flavorful chicken every time.
              </p>
            </div>
            {/* Right Side: Ingredients */}
            <div className="md:w-1/3 bg-pink-50 border border-gray-400 mt-14 ml-6 justify-start font-semibold rounded-2xl p-5 shadow-md">
              <h3 className="text-lg text-red-500 mb-3">INGREDIENTS</h3>
              <ul className="list-disc pl-6 text-xl text-black">
                <li>1 whole chicken (about 3-4 pounds)</li>
                <li>2 lemons, sliced</li>
                <li>6 cloves garlic, minced</li>
                <li>2 tbsp olive oil</li>
                <li>1 tsp dried thyme</li>
                <li>1 tsp dried rosemary</li>
                <li>Salt and pepper to taste</li>
              </ul>
            </div>
          </div>

          {/* Second Block */}
          <div className="flex flex-col mt-3 md:flex-row gap-8">
            {/* Left Side: Paragraph */}
            <div className="md:w-2/3 ml-4">
              <p className="text-black-500 ml-14 text-lg md:text-xl font-bold text-justify">
                Let’s go over the basics– the do’s, and the don’ts– for How to Cook a chicken
              </p>
              <br />
              <h5 className="text-red-500 ml-14 font-semibold text-2xl">DO'S:</h5>
              <br />
              <p className="text-black-500 ml-14 text-lg md:text-xl font-semibold">
                Thoroughly Clean Hands and Surfaces:
              </p>
              <p className="text-gray-500 ml-14 text-lg md:text-xl">
                Before and after handling raw chicken, ensure your hands, utensils, and surfaces are clean to prevent cross-contamination.
              </p>
              <br />
              <p className="text-black-500 ml-14 text-lg md:text-xl font-semibold">
                Use Separate Cutting Boards:
              </p>
              <p className="text-gray-500 ml-14 text-lg md:text-xl">
                Dedicate specific cutting boards for raw chicken to avoid the spread of bacteria to other foods.
              </p>
              <br />
              <p className="text-black-500 ml-14 text-lg md:text-xl font-semibold">
                Check Internal Temperature:
              </p>
              <p className="text-gray-500 ml-14 text-lg md:text-xl">
                Invest in a reliable meat thermometer to ensure the chicken reaches the safe internal temperature of 165°F (74°C).
              </p>
            </div>
            {/* Right Side: Equipment */}
            <div className="md:w-1/3 bg-pink-50 border border-gray-400 ml-9 justify-start font-semibold rounded-2xl p-8 mr-20">
              <h3 className="text-lg text-red-500">
                EQUIPMENT NEEDED FOR <br />PREPARATION
              </h3>
              <ul className="list-disc pl-4 text-lg text-black-700 font-bold">
                <li>Roasting pan</li>
                <li>Meat thermometer</li>
                <li>Cutting board</li>
                <li>Kitchen twine</li>
              </ul>
            </div>
          </div>

          {/* Third Block */}
          <div className="flex flex-col md:flex-row">
            {/* Left Side: Paragraph */}
            <div className="md:w-2/3 ml-14">
              <h5 className="text-red-500 ml-8 font-bold text-xl">DON'TS:</h5>
              <br />
              <p className="text-black-500 w-1/2 font-semibold text-justify text-xl">
                Thaw Chicken at Room Temperature:
              </p>
              <p className="text-gray-500 w-1/2 text-xl">
                Avoid thawing chicken on the counter. Instead, thaw it in the refrigerator to prevent bacterial growth.
              </p>
              <br />
              <p className="text-black-500 w-1/2 font-semibold text-justify text-xl">
                Overcrowd the Pan:
              </p>
              <p className="text-gray-500 w-1/2 text-justify text-xl">
                When roasting, ensure the chicken pieces have space between them for even cooking. Overcrowding can lead to unevenly cooked chicken.
              </p>
            </div>
            {/* Right Side: Equipment */}
            <div className="md:w-1/3 bg-pink-50 border border-gray-400 ml-4 font-semibold rounded-2xl p-8 mr-16">
              <h3 className="text-lg text-red-500 font-semibold">
                NUTRITIONAL VALUE
              </h3>
              <h3 className="text-gray-500 text-xl">Per serving (based on a 4-pound chicken):</h3>
              <br />
              <h3 className="text-gray-500 text-xl">
                <span className="text-black-700 font-bold text-xl">Calories:</span> ~250
              </h3>
              <h3 className="text-gray-500 text-xl">
                <span className="text-black-500 font-bold text-xl">Protein:</span> ~30g
              </h3>
              <h3 className="text-gray-500 text-xl">
                <span className="text-black-500 font-bold text-xl">Total Fat:</span> ~13g
              </h3>
              <h3 className="text-gray-500 text-xl">
                <span className="text-black-500 font-bold text-xl">Carbohydrates:</span> ~3g
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <SubscribeSection />
    </div>
  );
}
