import { Link } from "react-router-dom";
import styled from "styled-components";
import WordList from "../components/WordList";

const Home = () => {
  return (
    <HomeLayout>
      <WordList />
      <Link to="/new-word" className="add-btn paper-btn">
        Add Word
      </Link>
    </HomeLayout>
  );
};

const HomeLayout = styled.div`
  position: relative;

  & .add-btn {
    position: fixed;
    /* padding: 10px 10px 0px 10px; */
    bottom: 10vh;
    background: lightgrey;
    font-weight: bold;
  }
`;

export default Home;
