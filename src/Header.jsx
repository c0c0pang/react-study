import {
  HeaderDiv,
  TitleLogoDiv,
  TitleBig,
  TitleSmall,
  SubHeaderDiv,
} from "./styledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Header({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };
  return (
    <HeaderDiv>
      <TitleLogoDiv>
        <TitleBig>멋사</TitleBig>
        <TitleSmall>익명게시판</TitleSmall>
      </TitleLogoDiv>
      <SubHeaderDiv>
        {darkMode ? (
          <div onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={faSun} /> 다크모드 OFF
          </div>
        ) : (
          <div onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={faMoon} /> 다크모드 ON
          </div>
        )}
      </SubHeaderDiv>
    </HeaderDiv>
  );
}
export default Header;
