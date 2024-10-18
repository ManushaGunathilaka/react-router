import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData();

  // Ensure careers is defined and is an array
  return (
    <div className="careers">
      {careers && careers.length > 0 ? ( // Check if careers is defined and has items
        careers.map((career) => (
          <Link to="/" key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        ))
      ) : (
        <p>No careers available.</p> // Optional: Provide a message when no data
      )}
    </div>
  );
};

export default Careers;

//loader function
export const careersLoader = async () => {
  try {
    const res = await fetch("http://localhost:8000/careers");
    if (!res.ok) {
      throw new Error("Failed to fetch careers");
    }
    return await res.json();
  } catch (error) {
    console.error("Error loading careers:", error);
    throw error; // Propagate error to show it in your UI
  }
};
