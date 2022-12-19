import React from "react";
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
    >
      <TiArrowBack className="text-3xl" />
    </button>
  );
};

export default BackButton;
