import Loader from "react-loader-spinner";
import styled from "styled-components";

const Sloader = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingIndicator = (props) => {
  return (
    <Sloader>
      <Loader type="Circles" color="#00BFFF" height={100} width={100} />
    </Sloader>
  );
};

export default LoadingIndicator;
