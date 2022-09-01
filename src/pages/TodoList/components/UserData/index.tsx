import React from "react";
import { FC } from "react";
import styled from "styled-components";

const UserPictureBlock = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;
const UserPicture = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${"https://picsum.photos/200/300?grayscale"});
  border-radius: 50%;
`;
const UserName = styled.div`
  font-family: "Verdana", "sans-serif";
  color: #fff;
  font-weight: 900;
  padding-top: 35px;
  letter-spacing: 0.25px;
  font-size: 20px;
  text-align: center;
`;

const UserData: FC = () => {
  return (
    <>
      <UserPictureBlock>
        <UserPicture></UserPicture>
      </UserPictureBlock>
      <UserName>Leo Chang</UserName>
    </>
  );
};

export default UserData;
