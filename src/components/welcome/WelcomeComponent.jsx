import React from "react";
import { Link, useParams } from "react-router-dom";

const WelcomeComponent = () => {
  const { name } = useParams();
  return (
    <div>
      Welcome <span style={{ color: "red" }}>{name}</span>. You can manage your
      todos <Link to="/todos">here</Link>
    </div>
  );
};

export default WelcomeComponent;
