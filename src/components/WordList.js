import styled from "styled-components";
import { useSelector } from "react-redux";

import Word from "./Word";

const WordList = () => {
  const wordList = useSelector(({ vocabulary }) => vocabulary.wordList);

  const loadedWord = wordList.map((word) => (
    <Word key={word.id} wordData={word} id={word.id} />
  ));

  return <WordLayout>{loadedWord}</WordLayout>;
};

const WordLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: scroll;
`;

export default WordList;
