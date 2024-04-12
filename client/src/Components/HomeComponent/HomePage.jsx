import React, { useRef } from "react";
import PageContentOne from "./PageContents/PageContentOne";
import PageContentTwo from "./PageContents/PageContentTwo";

const HomePage = () => {
  const contentTwoRef = useRef(null);

  const scrollToContentTwo = () => {
    contentTwoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <PageContentOne onGetStartedClick={scrollToContentTwo} />
      <div className="m-5 cursor-default" ref={contentTwoRef}>
        <PageContentTwo />
      </div>
    </>
  );
};

export default HomePage;
