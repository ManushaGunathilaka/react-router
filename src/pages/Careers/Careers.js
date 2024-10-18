import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Careers = () => {
  const [careers, setCareers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await fetch("http://localhost:8000/careers");
        if (!res.ok) {
          throw new Error("Failed to fetch careers");
        }
        const data = await res.json();
        setCareers(data);
      } catch (error) {
        setError(error.message);
        throw error;
      }
    };

    fetchCareers();
  }, []);

  if (error) {
    throw new Error(error); // Ensure error is thrown here to trigger the error boundary
  }

  return (
    <div className="careers">
      {careers.length > 0 ? (
        careers.map((career) => (
          <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        ))
      ) : (
        <p>No careers available.</p>
      )}
    </div>
  );
};

export default Careers;
