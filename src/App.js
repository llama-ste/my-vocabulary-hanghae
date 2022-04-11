import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";

import Loader from "./components/UI/Loader";
import { loadWordListFB } from "./store/modules/vocabulary";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoaded = useSelector(({ vocabulary }) => vocabulary.isLoaded);

  useEffect(() => {
    dispatch(loadWordListFB());
  }, [dispatch]);

  return (
    <Layout>
      <h2 onClick={() => navigate("/")}>My Vocabulary</h2>
      <main className="paper border-5">
        {isLoaded ? <Outlet /> : <Loader />}
      </main>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  max-height: 100vh;

  & h2 {
    margin: 20px;
  }

  & h2:hover {
    cursor: pointer;
  }

  & main {
    margin-bottom: 50px;
    width: 50vh;
    height: 90vh;
    overflow: scroll;
    border: 2px solid #41403e;
  }
`;

export default App;
