import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useState } from "react";

import {
  deleteWordFB,
  editWordFB,
  completeWordFB,
} from "../store/modules/vocabulary";

const Word = ({ wordData }) => {
  const [editMode, setEditMode] = useState(false);
  const [word, setWord] = useState(wordData.word);
  const [description, setDescription] = useState(wordData.description);
  const [example, setExample] = useState(wordData.example);

  const editModeHandler = () => {
    setEditMode((prev) => !prev);
  };

  const dispatch = useDispatch();

  const deleteWordHandler = () => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }

    dispatch(deleteWordFB(wordData.id));
  };

  const updateWordHandler = () => {
    dispatch(editWordFB(wordData.id, { word, description, example }));
    setEditMode(false);
  };

  const isDoneWordHandler = () => {
    dispatch(completeWordFB(wordData.id, !wordData.isDone));
  };

  return (
    <Card className="card border" isDone={wordData.isDone}>
      <div className="card-body">
        <b>단어</b>
        {editMode ? (
          <textarea
            value={word}
            onChange={(e) => setWord(e.target.value)}
            required
          ></textarea>
        ) : (
          <p>{wordData.word}</p>
        )}
        <b>설명</b>
        {editMode ? (
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        ) : (
          <p>{wordData.description}</p>
        )}
        <b>예시</b>
        {editMode ? (
          <textarea
            value={example}
            onChange={(e) => setExample(e.target.value)}
            required
          ></textarea>
        ) : (
          <p className="card-subtitle">{wordData.example}</p>
        )}

        {editMode ? (
          <div className="btn-wrapper1">
            <div>
              <button
                onClick={deleteWordHandler}
                className="btn-small btn-danger-outline"
              >
                Delete
              </button>
            </div>
            <div>
              <button
                onClick={editModeHandler}
                className="btn-primary-outline btn-small"
              >
                Cancel
              </button>
              <button
                onClick={updateWordHandler}
                className="btn-small btn-secondary-outline"
              >
                Update
              </button>
            </div>
          </div>
        ) : (
          <div className="btn-wrapper2">
            <button
              onClick={isDoneWordHandler}
              className="btn-small btn-secondary-outline"
            >
              {wordData.isDone ? "Undo" : "Done"}
            </button>
            <button
              onClick={editModeHandler}
              className="btn-primary-outline btn-small"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </Card>
  );
};

const Card = styled.div`
  border: 2px solid #41403e;
  background-color: ${({ isDone }) => (isDone ? "#D3D3D3" : null)};
  color: ${({ isDone }) => (isDone ? "#fff" : null)};
  margin-bottom: 20px;

  & .card-body b {
    display: block;
    margin-bottom: 5px;
  }

  & .card-body p {
    text-decoration: ${({ isDone }) => (isDone ? "line-through" : null)};
  }

  & .card-body .btn-wrapper1 {
    display: flex;
    justify-content: space-between;
  }

  & .card-body .btn-wrapper2 {
    text-align: end;
  }

  & .card-body textarea {
    color: ${({ isDone }) => (isDone ? "#fff" : null)};
    border-color: ${({ isDone }) => (isDone ? "#fff" : null)};
    width: 100%;
    margin-bottom: 15px;
  }

  & .btn-wrapper2 button:nth-child(2),
  & .btn-wrapper1 button:nth-child(2) {
    margin-left: 5px;
  }
`;

export default Word;
