import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();
  const [careerDetails, setCareerDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareerDetails = async () => {
      try {
        const res = await fetch("http://localhost:8000/careers/" + id);
        if (!res.ok) {
          throw new Error("Could not find that career");
        }
        const data = await res.json();
        setCareerDetails(data);
      } catch (error) {
        setError(error.message);
        throw error; // Ensure the error propagates to trigger errorElement
      }
    };
    fetchCareerDetails();
  }, [id]);

  if (error) {
    throw new Error(error); // Ensure error is thrown here to trigger the error boundary
  }

  return (
    <div className="career-details">
      <h2>Career Details for {careerDetails?.title}</h2>
      <p>Starting salary: {careerDetails?.salary}</p>
      <p>Location: {careerDetails?.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed
          sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!
        </p>
      </div>
    </div>
  );
};

export default CareerDetails;
