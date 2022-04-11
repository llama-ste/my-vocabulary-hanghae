import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundLayout>
      <h4>That page doesn't exist!</h4>
      <button onClick={() => navigate("/", { replace: true })}>
        Go To Home
      </button>
    </NotFoundLayout>
  );
};

const NotFoundLayout = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default NotFound;
