import React from "react";
import { useParams } from "react-router-dom";

const SucessPage = () => {
  const {id} = useParams();
  return (
    <>
    <h1>{id} successfull </h1>
    
    </>
  )
};

export default SucessPage;
