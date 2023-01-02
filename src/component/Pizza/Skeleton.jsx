import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="133" cy="116" r="101" />
    <rect x="10" y="239" rx="0" ry="0" width="260" height="56" />
    <rect x="0" y="317" rx="0" ry="0" width="280" height="88" />
    <rect x="129" y="442" rx="23" ry="23" width="150" height="45" />
    <rect x="4" y="452" rx="0" ry="0" width="90" height="30" />
  </ContentLoader>
);

export default Skeleton;
