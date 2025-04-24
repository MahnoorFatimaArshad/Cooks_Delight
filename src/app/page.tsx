import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaClock, FaUtensils, FaUserFriends } from "react-icons/fa"; // Import required icons 
import Recipes from "./recipes/page";
import SubscribeSection from "./components/subscribe";



export default function Home() {
  return (
    
    <div className=" mt-0">
      <section className="py-12 border  border-gray-400 rounded-lg">
        {/* Recipe Button */}
        <div className="text-center  mb-6">
          <a
            href="/recipes"
            className="bg-red-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300"
          >
            Recipes
          </a>
        </div>

        {/* Recipe Title */}
        <h6 className="text-8xl font-extrabold text-black text-center mb-4">
          LEMON GARLIC <br /> ROASTED CHICKEN
        </h6>

        {/* Description */}
        <p className="text-gray-400 text-center text-2xl justify-normal mx-auto max-w-3xl space-y-4">
          A delightful recipe that combines the zesty tang of lemons with the
          rich, aromatic flavors of garlic. Perfect for family dinners or
          special occasions, this dish is simple yet sophisticated. Juicy and
          tender, it's sure to impress your guests. Try it today and elevate
          your cooking game with this timeless classic!
        </p>

        {/* Time, Prep, and Serves */}
        <div className="text-black  font-medium flex justify-center items-center gap-4 mt-8 text-1.5xl">
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
            className="w-[90%] h-[90vh]  rounded-xl shadow-md"
          />
        </div>

        {/* Content Blocks */}
        <div className="mt-8 space-y-8">
          {/* First Block */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Side: Paragraph */}
            <div className="md:w-2/3 ml-4">
              <p className="text-gray-500 ml-14 w-1/2 text-1.5xl">
                This Lemon Garlic Roasted Chicken recipe is the perfect balance of tangy citrus and savory garlic. It's a classic recipe that guarantees juicy, flavorful chicken every time. This Lemon Garlic Roasted Chicken recipe is the perfect balance of tangy citrus and savory garlic. It's a classic recipe that guarantees juicy, flavorful chicken every time.</p>
                <br/>
                <p className="text-gray-500 w-1/2 ml-14 text-1.5xl">This Lemon Garlic Roasted Chicken recipe is the perfect balance
                of tangy citrus and savory garlic. It's a classic recipe that guarantees juicy, flavorful chicken every time.This Lemon Garlic Roasted Chicken recipe is the perfect balance of tangy citrus and savory garlic.It's a classic recipe that guarantees juicy, flavorful chicken every time.
              </p>
            </div>
            {/* Right Side: Ingredients */}
            <div className="md:w-1/3 bg-pink-50 border border-gray-400 mt-14 ml-6 justify-start font-semibold  rounded-2xl p-5 shadow-md mr-20">
              <h3 className="text-lg text-red-500 mb-3">INGREDIENTS</h3>
              <ul className="list-disc pl-6 text-2xl text-black">
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
          <div className="flex flex-colmt-3 md:flex-row gap-8">
            {/* Left Side: Paragraph */}
            <div className="md:w-2/3 ml-4">
            <p className="text-black-500 ml-14 w-1/2 font-bold text-justify text-2xl">
            Let’s go over the basics– the do’s, and the don’ts– for How to Cook a chicken </p><br/>
              <h5 className="text-red-500 ml-14 font-semibold text-2xl  ">DO'S:</h5><br/>
              <p className="text-black-500 ml-14 text-justify font-semibold text-1.5xl">
               Thoroughly Clean Hands and Surfaces: </p>
               <p className="text-gray-500 ml-14 w-1/2 text-justify text-1.5xl">
               Before and after handling raw chicken, ensure your hands, utensils, and surfaces are clean to prevent cross-contamination.
                </p><br/>
             <p className="text-black-500 ml-14 w-1/2 text-justify font-semibold text-1.5xl">
             Use Separate Cutting Boards: </p>
               <p className="text-gray-500 ml-14  w-1/2 text-justify text-1.5xl">
               Dedicate specific cutting boards for raw chicken to avoid the spread of bacteria to other foods.
             </p><br/>
             <p className="text-black-500 ml-14 w-1/2 text-justify font-semibold text-1.5xl">
             Check Internal Temperature: </p>
               <p className="text-gray-500 ml-14 w-1/2 text-justify text-1.5xl">
               Invest in a reliable meat thermometer to ensure the chicken reaches the safe internal temperature of 165°F (74°C).
             </p>
            </div>
            {/* Right Side: Equipment */}
            <div className="md:w-1/3 bg-pink-50 border border-gray-400 ml-9  justify-start font-semibold rounded-2xl p-8 h-[50%]  mr-20">
              <h3 className="text-lg text-red-500">
                EQUIPMENT NEEDED FOR <br/>PREPARATION
              </h3>
              <ul className="list-disc pl-4 text-lg text-black-700 font-bold ">
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
              <h5 className="text-red-500 ml-8 font-bold text-2xl">DON'TS:</h5><br/>
              <p className="text-black-500  w-1/2 font-semibold text-justify  text-1.5xl">Thaw Chicken at Room Temperature: </p>
              <p className="text-gray-500  w-1/2 text-1.5xl"> Avoid thawing chicken on the counter. Instead, thaw it in the refrigerator to prevent bacterial growth.
              </p><br/>
              <p className="text-black-500  w-1/2 font-semibold text-justify text-1.5xl">Overcrowd the Pan: </p>
              <p className="text-gray-500  w-1/2 text-justify text-1.5xl">When roasting, ensure the chicken pieces have space between them for even cooking. Overcrowding can lead to unevenly cooked chicken.</p>
            </div>
            {/* Right Side: Equipment */}
            <div className="md:w-1/3 bg-pink-50 border border-gray-400  ml-4 font-semibold rounded-2xl p-8  mr-16">
              <h3 className="text-lg text-red-500 font-semibold">
              NUTRITIONAL VALUE </h3>
              <h3 className="text-gray-500  text-1.5xl">Per serving (based on a 4-pound chicken):</h3><br/>
               <h3 className="text-gray-500 text-justify text-1.5xl"> 
              <span className="text-black-700 font-bold text-justify text-1xl">Calories:</span>~250 </h3>
             <h3 className="text-gray-500 text-justify text-1.5xl"><span className="text-black-500 font-bold text-justify text-1xl">      Protein:</span> ~30g </h3>
             <h3 className="text-gray-500 text-justify text-1.5xl"><span className="text-black-500 font-bold text-justify text-1xl">
                 Total Fat:</span> ~13g </h3>
             <h3 className="text-gray-500 text-justify text-1.5xl"> <span className="text-black-500 font-bold text-justify text-1xl">
                 Carbohydrates:</span>~5g</h3>
            </div>
          </div>
        </div>
         {/* Additional Lines of Text  */}
  <div className="text-right text-gray-400  ml-4 mr-16">
  <p>
    NOTE:NUTRITIONAL VALUES ARE APPROXIMATE AND MAY VERY <br/>BASED ON  THE SPECIFIC INGREDIENTS AND PORTION SIZES.
  </p>
</div>
        {/* instructions */}
        <div className="md:w-2/3 ml-4">
        <h1 className="font-bold ml-14 text-black-700 text-5xl">INSTRUCTIONS</h1><br/>
              <p className="text-gray-500 ml-14 w-1/2 text-1.5xl">
                This Lemon Garlic Roasted Chicken recipe is the perfect balance of tangy citrus and savory garlic. It's a classic recipe that guarantees juicy, flavorful chicken every time. This Lemon Garlic Roasted Chicken recipe is the perfect balance of tangy citrus and savory garlic.</p>
                <br/>
                <p className="text-gray-500 ml-14 w-1/2 text-1.5xl">This Lemon Garlic Roasted Chicken recipe is the perfect balance
                of tangy citrus and savory garlic. It's a classic recipe that guarantees juicy, flavorful chicken every time.This Lemon Garlic Roasted Chicken recipe is the perfect balance of tangy citrus and savory garlic.It's a classic recipe that guarantees juicy, flavorful chicken every time.
              </p>
            </div><br/>
            <div>
              <h3 className="text-2xl text-red-600 font-semibold ml-14">PREHEAT AND PREPARE</h3><br/>
              <ul className="list-disc text-gray-600 ml-14 ">
                <li className="ml-14">  Preheat your oven to 375°F (190°C)</li>
                <li className="ml-14">Rinse the chicken inside and out, then pat it dry with paper towels.</li>
              </ul><br/>
              <h3 className="text-2xl text-red-600 font-semibold  ml-14">CITRUS INFUSION</h3><br/>
              <ul className="list-disc text-gray-600 ml-14 ">
                <li className="ml-14">Carefully lift the skin of the chicken and rub minced garlic directly onto the meat.</li>
                <li className="ml-14">Place lemon slices under the skin, ensuring they cover as much surface as possible. </li>
              </ul>
            </div>
            {/* 2nd pic */}
            <div className="w-full h-auto mt-6 flex justify-start ml-14">
          <img
            src="/images/chicken.jpg"
            alt="chicken.jpg"
            className="w-[50%] h-[70vh]  rounded-3xl shadow-md"
          />
        </div>
        <br/>
        <div>
        <h3 className="text-2xl text-red-600 font-semibold ml-14">HERB BLEND</h3><br/>
              <ul className="list-disc text-gray-600 w-1/2 ml-11 ">
                <li className="ml-14">In a small bowl, mix olive oil, dried thyme, dried rosemary, salt, and black pepper to create a herb infused mixture</li>
                <li className="ml-14">Brush the entire chicken with the herb infused mixture, making sure it's evenly coated </li>
                <li className="ml-14">Season the exterior with additional salt and black pepper to taste.</li>
              </ul>
        </div>
        {/* 3rd pic */}
        <div className="w-full h-auto mt-6 flex justify-start ml-14">
          <img
            src="/images/herb blend.webp"
            alt="herb blend"
            className="w-[50%] h-[70vh] rounded-3xl shadow-md"
          />
        </div><br/>
        <div>
        <h3 className="text-2xl text-red-600 font-semibold ml-14">ROAST TO PERFECTION</h3><br/>
              <ul className="list-disc text-gray-600 w-1/2 ml-14 ">
                <li className="ml-14">Place the chicken in a roasting pan, breast side up </li>
                <li className="ml-14">Roast in the preheated oven for approximately 1 hour or until the internal temperature reaches 165°F (74°C)</li>
                <li className="ml-14">Allow the chicken to rest for 10 minutes before carving</li>
                <li className="ml-14">Serve with the pan juices and roasted lemon slices for an extra burst of flavor.</li>
              </ul>
        </div>
        {/* 3rd pic */}
        <div className="w-full h-auto mt-6 flex justify-start ml-14">
          <img
            src="/images/herb blend.webp"
            alt="recipe-video"
            className="w-[50%] h-[70vh] rounded-3xl shadow-md"
          />
        </div>
        <br/>
        <div>
        <h3 className="text-2xl text-red-600  ml-14 font-semibold">PAIRING SUGGESTIONS</h3><br/>
              <ol className="list-decimal text-gray-600 ml-14 ">
                <li className=" text-gray-600 ml-14 "><span className="text-1.5xl">Side Dish:</span> Serve alongside roasted vegetables or a simple green salad</li>
                <li className=" text-gray-600 ml-14 "><span className="text-1.5xl">Wine:</span> Pair with a crisp or a for a well-balanced meal. white wine light rosé</li>
                </ol>


                <div className="md:w-2/3 ml-14">
              <p className="text-gray-500 ml-14 w-1/2 text-justify text-1.5xl"><span  className="text-red-500  underline text-1.5xl">Roasted Vegetables:</span> The vibrant flavors of the roasted chicken complement beautifully with seasonal vegetables. </p><br/>
              <p className="text-gray-500 ml-14 w-1/2 text-justify text-1.5xl"><span  className="text-red-500  underline text-1.5xl">
              Herb infused Quinoa:</span>  Create a wholesome meal by serving it alongside a bed of herb-infused quinoa.</p><br/>
              <p className="text-gray-500 ml-14 w-1/2 text-justify text-1.5xl"> The combination of fresh lemon and aromatic garlic creates a citrus-infused masterpiece that takes the classic roast chicken to a whole new level. The acidity of the lemons not only adds brightness but also helps to tenderize the meat, resulting in a juicy and flavorful dish.<br/>
              Whether you're hosting a family dinner or looking for a show-stopping centerpiece for a special celebration, this Lemon Garlic Roasted Chicken is the answer. The simplicity of the ingredients allows the natural flavors to shine,making it a versatile and impressive dish.</p>
              <br/>
              <br/>
        <div className="fixed-bottom ml-14 top-1/2 left-4 transform -translate-y-1/2">
      <button className="flex items-center justify-between w-60  bg-gray-200 hover:bg-gray-200 border border-gray-700 rounded-full px-4 py-2 shadow-md">
        <span className="font-medium text-gray-800">SHARE</span>
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              alt="YouTube"
              className="w-6 h-6"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
        </div>
      </button>
    </div>
    </div>
          {/* Horizontal Line */}
          <div className="mt-4  ml-14 w-1/2 h-[2px] bg-gray-200"></div>
    </div>
  {/* Image Section */}
  <div className="flex bg-gray-100 p-6 rounded-lg shadow-md  mr-14 items-center">
  {/* Image Section */}
  <div className="w-auto flex-shrink-0">
    <img
      src="/images/dp.jpg"
      alt="Sample Image"
      className="rounded-lg object-cover w-36 h-40"
    />
  </div>

  {/* Text Section */}
  <div className="flex-1 ml-4">
    <h2 className="text-xl font-bold mb-4 text-gray-400">Isabella Russo</h2>
    <p className="text-gray-500 w-1/2 mb-4">
    In the world of pots and pans, I'm on a mission to turn every meal into a masterpiece. Cooks Delight is not just a blog; it's a shared space where the love for food transcends boundaries. Here, we celebrate the art of crafting meals that not only nourish the body but also feed the soul. </p>

    {/* Learn More Button */}
    <button className="px-4 py-2 bg-gray-200 font-semibold text-black rounded-full border border-gray-700 hover:bg-blue-600">
    LEARN MORE
    </button>
    
  </div>
</div>
</section>

 <Recipes/>
 <SubscribeSection/>


</div>


  );
}
