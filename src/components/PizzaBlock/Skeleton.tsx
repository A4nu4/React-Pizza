import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="132" cy="132" r="125" />
    <rect x="6" y="272" rx="10" ry="10" width="260" height="20" />
    <rect x="8" y="313" rx="10" ry="10" width="260" height="88" />
    <rect x="12" y="429" rx="10" ry="10" width="95" height="30" />
    <rect x="115" y="420" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
