import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#e44848"
      ariaLabel="ball-triangle-loading"
      visible={true}
    />
  );
};

export default Loader;
