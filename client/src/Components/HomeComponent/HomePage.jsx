import React from "react";
import PageContentOne from "./PageContents/PageContentOne";
import PageContentTwo from "./PageContents/PageContentTwo";

const HomePage = () => {
  return (
    <>
      <PageContentOne />
      <div className="m-5 cursor-default">
        <PageContentTwo />
      </div>
    </>
  );
};

export default HomePage;
