import Loader from "react-loader-spinner";

const LoadingIndicator = (props) => {
  return (
    <div>
      <Loader type="Circles" color="#00BFFF" height={100} width={100} />
      <h1>Hey some async call in progress! </h1>
    </div>
  );
};

export default LoadingIndicator;
