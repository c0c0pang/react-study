import React, { useState } from "react";
import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostTitle,
  PostTitleDiv,
  PostWriteDiv,
  TitleInput,
  ContentsInput,
} from "./styledComponent";
import WriteTitle from "./WriteTitle";
import InputPost from "./InputPost";
const SubmitComponent = React.memo(() => {
  <PostSubmitDiv>
    <PostSubmit>작성완료</PostSubmit>
  </PostSubmitDiv>;
});

const WritePost = () => {
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
  });
  const { title, contents } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <PostSection>
      <WriteTitle />
      <PostWriteDiv>
        <InputPost
          onChange={onChange}
          title={title}
          contents={contents}
        ></InputPost>
      </PostWriteDiv>
      <SubmitComponent />
    </PostSection>
  );
};

export default WritePost;
