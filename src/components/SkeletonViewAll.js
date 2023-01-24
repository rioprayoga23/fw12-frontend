import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonViewAll = () => {
  return (
    <ContentLoader
      className="mr-7 md:mr-3 flex-shrink-0 w-[200px] h-[300px]  md:w-[100px] md:h-[130px]"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
    >
      <rect ry="10" className="w-[200px] h-[300px] md:w-[100px] md:h-[130px]" />
    </ContentLoader>
  );
};

export default SkeletonViewAll;
