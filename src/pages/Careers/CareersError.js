import React from "react";
import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
  const error = useRouteError();
  return (
    <div>
      <div className="careers-error">
        <h2>Errorrrr</h2>
        <p>{error.message}</p>
        <Link to="/">Back to the Homepage</Link>
      </div>
    </div>
  );
};

export default CareersError;
