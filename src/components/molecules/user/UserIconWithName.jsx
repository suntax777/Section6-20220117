import styled from "styled-components";
import React, { useContext } from "react";

export const UserIconWithName = (props) => {
  const { image, name, isAdmin } = props;
  const context = userContex();
  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <p>{name}</p>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 50%;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0
  color: #40514e
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
