import React, { CSSProperties, FC, useEffect } from "react";
import { Back, Title, Wrapper } from "@components/ReponsiveBar/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

interface Props {
  title: string;
}

const ReponsiveBar: FC<Props> = ({ title }) => {
  const history = useHistory();

  const handleHistory = () => {
    history.goBack();
  };

  return (
    <div>
      <Wrapper>
        <Back>
          <FontAwesomeIcon icon={faArrowLeft} onClick={handleHistory} />
        </Back>
        <Title>{title}</Title>
        <div></div>
      </Wrapper>
    </div>
  );
};

export default ReponsiveBar;
