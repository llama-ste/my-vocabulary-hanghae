import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addWordFB } from "../store/modules/vocabulary";

const NewWord = () => {
  const wordRef = useRef();
  const descriptionRef = useRef();
  const exampleRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const wordData = {
      word: wordRef.current.value,
      description: descriptionRef.current.value,
      example: exampleRef.current.value,
      isDone: false,
      createAt: Date.now(),
    };

    dispatch(addWordFB(wordData));

    navigate("/", { replace: true });
  };

  return (
    <FormLayout className="form-group" onSubmit={submitHandler}>
      <label htmlFor="word-input">단어</label>
      <textarea
        ref={wordRef}
        required
        id="word-input"
        placeholder="Word"
      ></textarea>
      <label htmlFor="description-input">설명</label>
      <textarea
        ref={descriptionRef}
        required
        id="description-input"
        placeholder="Description"
      ></textarea>
      <label htmlFor="example-input">예시</label>
      <textarea
        ref={exampleRef}
        required
        id="example-input"
        placeholder="Example"
      ></textarea>
      <button>Add Word</button>
    </FormLayout>
  );
};

const FormLayout = styled.form`
  display: flex;
  flex-direction: column;

  & label {
    margin-bottom: 8px;
  }
  & textarea {
    margin-bottom: 20px;
  }
`;

export default NewWord;
