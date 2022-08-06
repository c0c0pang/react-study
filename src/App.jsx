import { Main, MediaDiv } from "./styledComponent";
// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Slogun from "./Slogun";
import ShowPostList from "./ShowPostList";
import { useState } from "react";

function App() {
  const initialPostList = [
    { id: 1, title: "안녕", replCount: 1 },
    { id: 2, title: "하세", replCount: 2 },
    { id: 3, title: "요", replCount: 3 },
  ];
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isPost, setisPost] = useState(false);
  const [postList, setPostList] = useState(initialPostList);
  const addPost = () => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: "w", replCount: 22 },
    ]);
  };

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <ShowPostList
              loading={loading}
              isPost={isPost}
              postList={postList}
              addPost={addPost}
            />
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
