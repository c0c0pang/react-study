import React, { useState, useEffect, useCallback } from "react";
import {
  PostSection,
  PostTitleDiv,
  PostTitle,
  PostListDiv,
  PagingSection,
  PagenumberDiv,
  LoadingDiv,
  LoadingImg,
  CursorDiv,
} from "./styledComponent";
import {
  faArrowsRotate,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loadingIcon from "./loading.svg";
import axios from "axios";
import EachPost from "./EachPost";
import { useNavigate } from "react-router-dom";

// const initialPostList = [
//   { id: 1, title: "시사N, 대학기자상 취재" },
//   { id: 2, title: "학보, 시사N, 대학기자상 취재" },
//   { id: 3, title: "학보, 시사N, 대학기자상 취재" },
// ];

function ShowPostList({ apiUrl }) {
  const [loading, setLoading] = useState(true);
  const [isPost, setisPost] = useState(false);
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);
  const addPost = useCallback(() => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: "학보, 시사N, 대학기자상 취재" },
    ]);
  }, [postList]);

  const navigate = useNavigate();
  const goWrite = () => {
    navigate("/write");
  };
  useEffect(() => {
    axios.get(`${apiUrl}list/?page=1&page_size=10`).then((response) => {
      const lataPage = Math.ceil(response.data.count / 10);
      const tempPages = [];
      for (let i = 1; i <= lataPage; i++) {
        tempPages.push(i);
      }
      setPages(tempPages);
      setPostList(response.data.results);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
          <PostTitle>익명게시판</PostTitle>
          <CursorDiv>
            <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare} />
          </CursorDiv>
        </PostTitleDiv>
        <PostListDiv>
          {loading ? (
            <LoadingDiv>
              <LoadingImg src={loadingIcon} />
            </LoadingDiv>
          ) : isPost ? (
            <LoadingDiv>아직 기록된 글이 없습니다.</LoadingDiv>
          ) : (
            <ul>
              {postList.map((element) => (
                <EachPost
                  key={element.id}
                  title={element.title}
                  postID={element.id}
                />
              ))}
            </ul>
          )}
        </PostListDiv>
      </PostSection>

      <PagingSection>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowLeft} />
        </PagenumberDiv>
        <PagenumberDiv>
          {pages.map((pageNum) => (
            <PagenumberDiv key={pageNum}>{pageNum}</PagenumberDiv>
          ))}
        </PagenumberDiv>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowRight} />
        </PagenumberDiv>
      </PagingSection>
    </>
  );
}
export default ShowPostList;
