import { FooterDiv, FooterBig, FooterSmall } from "./styledComponent";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
function Footer() {
  return (
    <FooterDiv>
      <FontAwesomeIcon icon={faReact} />
      <FooterBig>for react study</FooterBig>
      <FooterSmall>2022 08 06</FooterSmall>
    </FooterDiv>
  );
}
export default React.memo(Footer);
