import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderLayout>
      <img src={process.env.PUBLIC_URL + "./image/llama.png"} />
      <h3>Loading...</h3>
    </LoaderLayout>
  );
};

const LoaderLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  & img {
    border: none;
    padding-top: 3px;
  }

  & h3 {
    margin: 10px 0px;
  }
`;

export default Loader;
