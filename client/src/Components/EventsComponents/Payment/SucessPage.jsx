import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SucessPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(
        `https://project-club-fuisson.onrender.com/participants/${id}`
      );
    };
  });
  return (
    <>
      <h1>uccessfull </h1>
    </>
  );
};

export default SucessPage;
