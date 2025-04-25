import React from "react";

export default function SubscribeSection() {
  return (
    <div className="flex flex-col items-center h-[70vh] justify-center mt-16 border rounded-xl bg-red-400 py-10">
      {/* Subscribe Header */}
      <h2 className="text-3xl font-bold mb-4 text-white">SUBSCRIBE</h2>

      {/* Description */}
      <p className="text-8xl text-center font-bold mb-4 text-white">JOIN THE FUN</p>
      <p className="text-8xl text-center font-bold mb-4 text-white">SUBSCRIBE NOW!</p>

      {/* Additional Info */}
      <p className="text-2xl font-bold text-center mb-8 w-1/2 text-white">
        Subscribe to our newsletter for a weekly serving of recipes, cooking tips, and exclusive insights straight to your inbox.
      </p>

      {/* Email Input Section */}
      <div className="flex items-center rounded-full p-2 mb-2 bg-white">
        <input
          type="email"
          placeholder="Email Address"
          className="flex-grow p-4 rounded-full h-8 border-none text-2xl text-gray-400 outline-none"
        />
        <button className="bg-black text-white py-2 px-4 rounded-full ml-[-1px] h-10">
          Subscribe
        </button>
      </div>
    </div>
  );
}
