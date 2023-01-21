import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonUpcoming = () => {
  return (
    <ContentLoader
      className="mr-7 md:mr-3 flex-shrink-0"
      width={200}
      height={280}
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
    >
      <rect ry="10" width="200" height="280" />
    </ContentLoader>
  );
};

export default SkeletonUpcoming;
