import React, { useState } from "react";
import { FaHistory, FaGlobe, FaLandmark } from "react-icons/fa";

const SubjectCard = ({ title, description, image, icon: Icon }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
     
    <div className="transform transition-all duration-300 hover:scale-105  bg-slate-50 w-full flex items-center justify-center mt-20">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full ">
        <div className="relative">
          {isLoading && (
            <div className="animate-pulse bg-gray-200 h-48 w-full "></div>
          )}
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
            onLoad={() => setIsLoading(false)}
            style={{ display: isLoading ? "none" : "block" }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Icon className="text-2xl text-blue-600 mr-2" />
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          </div>
          <p className="text-gray-600 mb-6">{description}</p>
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => console.log(`Exploring ${title}`)}
          >
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

const SubjectGrid = () => {
  const subjects = [
    {
      title: "History",
      description: "Explore the past through engaging historical narratives and critical analysis of world-changing events.",
      image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1",
      icon: FaHistory
    },
    {
      title: "Geography",
      description: "Discover Earth's landscapes, climates, and the intricate relationships between human societies and their environment.",
      image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
      icon: FaGlobe
    },
    {
      title: "Polity",
      description: "Understanding political systems, governance structures, and the fundamental principles of democracy.",
      image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f",
      icon: FaLandmark
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjects.map((subject, index) => (
          <SubjectCard key={index} {...subject} />
        ))}
      </div>
    </div>
  );
};

export default SubjectGrid;