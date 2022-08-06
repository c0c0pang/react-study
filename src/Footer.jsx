import { FooterDiv, FooterBig, FooterSmall } from "./styledComponent";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <FooterDiv>
      <FontAwesomeIcon icon={faReact} />
      <FooterBig>for react study</FooterBig>
      <FooterSmall>2022 08 06</FooterSmall>
    </FooterDiv>
  );
}
export default Footer;
