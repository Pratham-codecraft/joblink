// components/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-12 py-10 bg-black text-white">
      <div className="w-full lg:w-2/3">
        <h2 className="text-6xl font-bold mb-4">Future Ready</h2>
        <p className="text-2xl mb-6">Unlock Opportunities</p>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col items-center">
        <img
          src="https://i.ibb.co/xmX5Fj6/side-image.jpg\" // Replace with your actual image
          alt="Discover Panel\"
          className="rounded-xl shadow-xl mb-6 w-72 h-96 object-cover\"
        />
        <button className="bg-white text-black px-6 py-2 rounded-full text-lg hover:bg-gray-300 transition\">
          Discover
        </button>
      </div>
    </div>
  );
}
