import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ClubDetail = () => {
  const { cludId } = useParams();
  const [clubDataById, setClubDataById] = useState(null);
  const [fetchData, setFetchData] = useState(true);
  const numberOfRows = 5;
  const numberOfColumns = 3;
  return (
    <>
      <div>s</div>
    </>
  );
};

export default ClubDetail;
